import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import resourcesSlice from './resourcesSlice';

export const store = configureStore({
  reducer: resourcesSlice,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
