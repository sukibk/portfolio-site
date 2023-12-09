import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface NavbarState {
  expanded: boolean;
}

const initialState: NavbarState = {
  expanded: false,
};

export const navbarSlice = createSlice({
  name: "navbarToggled",
  initialState,
  reducers: {
    toggle: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggle } = navbarSlice.actions;
export default navbarSlice.reducer;
