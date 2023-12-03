import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import AuthSlice from '@/store/auth/AuthSlice';
import ProfileSlice from '@/store/profile/ProfileSlice';

const persistConfig = {
    key: 'store',
    storage,
}

const rootReducer = combineReducers({
    auth: AuthSlice,
    profile: ProfileSlice,
});

const rootReducerPresested = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: rootReducerPresested,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
    devTools: import.meta.env.DEV
});

export const persistor = persistStore(store);
