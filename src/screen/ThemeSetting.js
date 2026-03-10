// src/screens/ThemeSettings.js
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from 'react-native';
import {useTheme} from '../context/ThemeContext';
import {themeColors} from '../config/appTheme';

const ThemeSettings = () => {
  const {theme, themeMode, setTheme, themeNames} = useTheme();

  const ThemeCard = ({themeKey}) => {
    const colors = themeColors[themeKey];
    const isSelected = themeMode === themeKey;

    return (
      <TouchableOpacity
        style={[
          styles.themeCard,
          {
            backgroundColor: theme.card,
            borderColor: isSelected ? theme.primary : theme.border,
            borderWidth: isSelected ? 3 : 1,
          },
        ]}
        onPress={() => setTheme(themeKey)}>
        {/* Theme Preview */}
        <View style={styles.previewContainer}>
          <View
            style={[styles.colorPreview, {backgroundColor: colors.primary}]}
          />
          <View
            style={[
              styles.colorPreview,
              {backgroundColor: colors.primaryLight},
            ]}
          />
          <View
            style={[styles.colorPreview, {backgroundColor: colors.secondary}]}
          />
          <View
            style={[
              styles.colorPreview,
              {backgroundColor: colors.accent || colors.primary},
            ]}
          />
        </View>

        <Text style={[styles.themeName, {color: theme.text}]}>
          {themeNames[themeKey]}
        </Text>

        {isSelected && (
          <View
            style={[styles.selectedBadge, {backgroundColor: theme.primary}]}>
            <Text style={styles.selectedText}>✓</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.background}]}>
      <Text style={[styles.header, {color: theme.text}]}>
        Choose Your Theme
      </Text>

      <FlatList
        data={Object.keys(themeColors)}
        keyExtractor={item => item}
        numColumns={2}
        renderItem={({item}) => <ThemeCard themeKey={item} />}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* Preview Section */}
      <View style={[styles.previewSection, {backgroundColor: theme.card}]}>
        <Text style={[styles.previewTitle, {color: theme.text}]}>
          Live Preview
        </Text>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={[styles.previewButton, {backgroundColor: theme.primary}]}>
            <Text style={styles.buttonText}>Primary</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.previewButton, {backgroundColor: theme.secondary}]}>
            <Text style={styles.buttonText}>Secondary</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.textRow}>
          <Text style={{color: theme.text}}>Text Color</Text>
          <Text style={{color: theme.accent}}>Accent Color</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  listContainer: {
    paddingBottom: 20,
  },
  themeCard: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    position: 'relative',
    minHeight: 140,
  },
  previewContainer: {
    flexDirection: 'row',
    marginBottom: 12,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  colorPreview: {
    width: 30,
    height: 30,
    borderRadius: 15,
    margin: 4,
    borderWidth: 1,
    borderColor: '#fff',
  },
  themeName: {
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  selectedBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  previewSection: {
    padding: 20,
    borderRadius: 12,
    marginTop: 10,
  },
  previewTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  previewButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  textRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});

export default ThemeSettings;
