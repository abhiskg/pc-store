import { configureStore } from "@reduxjs/toolkit";
import pcBuilderReducer from "./features/pcBuilderSlice";

const store = configureStore({
  reducer: {
    pcBuilder: pcBuilderReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
