import { createSlice } from '@reduxjs/toolkit';

import { darkTheme } from '../../../utils/theme/dark';
import { lightTheme } from '../../../utils/theme/light';

export interface ITheme {
  isLight: boolean;
  main: string;
  background: string;
  backgroundVariation: string;
  border: string;
  textMain: string;
  textVariation: string;
  false: string;
  true: string;
}

const themeSlice = createSlice({
  name: 'themeSlice',
  initialState: lightTheme,
  reducers: {
    swapTheme: (state: ITheme): ITheme => {
      if (state.isLight) {
        state = darkTheme;
      } else {
        state = lightTheme;
      }

      return state;
    },
  },
});

export const { swapTheme } = themeSlice.actions;
export const themeReducer = themeSlice.reducer;
