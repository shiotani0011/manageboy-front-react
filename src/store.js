import {
	configureStore,
	getDefaultMiddleware,
	combineReducers,
} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux';

import authReducer from './stores/auth';

const rootReducer = combineReducers({
	auth: authReducer,
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: [...getDefaultMiddleware()],
});
export const useAppDispatch = () => useDispatch();
