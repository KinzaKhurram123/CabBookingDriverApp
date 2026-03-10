import { createRef } from 'react';

export const navigationRef = createRef();

export const navigate = (name, params) => {
    navigationRef.current?.navigate(name, params);
};

export const goBack = () => {
    navigationRef.current?.goBack();
};

export const reset = (state) => {
    navigationRef.current?.reset(state);
};

export default {
    navigationRef,
    navigate,
    goBack,
    reset,
};