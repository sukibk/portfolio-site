import { configureStore } from "@reduxjs/toolkit";
import navbarSlice from "@/lib/navbar/navbarSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      navbar: navbarSlice,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
