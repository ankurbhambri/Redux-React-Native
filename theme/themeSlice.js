import {createSlice} from '@reduxjs/toolkit';

const initialStateValue = {
  themeColor: '',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState: initialStateValue,
  reducers: {
    changeColor: (state, action) => {
      state.themeColor = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {changeColor} = themeSlice.actions;

export default themeSlice.reducer;
