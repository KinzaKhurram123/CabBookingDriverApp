import React, {createContext, useState, useContext, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Colors, {themeColors} from '../config/appTheme';

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
  const deviceTheme = useColorScheme();
  const [themeMode, setThemeMode] = useState('default');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    loadTheme();
  }, []);

  useEffect(() => {
    if (themeMode === 'system') {
      setIsDarkMode(deviceTheme === 'dark');
    } else {
      const darkThemes = ['darkRed', 'blackBlue', 'blackRed'];
      setIsDarkMode(darkThemes.includes(themeMode));
    }
  }, [themeMode, deviceTheme]);

  const loadTheme = async () => {
    try {
      const savedTheme = await AsyncStorage.getItem('appTheme');
      if (savedTheme) {
        setThemeMode(savedTheme);
      }
    } catch (error) {
      console.error('Failed to load theme', error);
    }
  };

  const saveTheme = async theme => {
    try {
      await AsyncStorage.setItem('appTheme', theme);
    } catch (error) {
      console.error('Failed to save theme', error);
    }
  };

  const setTheme = theme => {
    setThemeMode(theme);
    saveTheme(theme);
  };

  const getCurrentThemeColors = () => {
    const selectedTheme = themeColors[themeMode] || themeColors.default;

    return {
      ...Colors,
      ...selectedTheme,
      themeColor: selectedTheme.primary,
      themeColorLight: selectedTheme.primaryLight,
      themeGreen: selectedTheme.secondary,
      themegredient: selectedTheme.gradient || Colors.themegredient,
      button_gredient: selectedTheme.buttonGradient || Colors.button_gredient,
    };
  };

  const theme = getCurrentThemeColors();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        themeMode,
        setTheme,
        isDarkMode,
        availableThemes: Object.keys(themeColors),
        themeNames: {
          default: 'Default Green',
          green: 'Fresh Green',
          blue: 'Ocean Blue',
          darkRed: 'Dark Crimson',
          blackBlue: 'Midnight Blue',
          blackRed: 'Blood Black',
          yellow: 'Sunshine Yellow',
        },
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};
