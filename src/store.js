import {
  configureStore,
  getDefaultMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

import authReducer from "./stores/auth";
import memberReducer from "./stores/member";

const rootReducer = combineReducers({
  auth: authReducer,
  member: memberReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware()],
});

export const useAppDispatch = () => useDispatch();
