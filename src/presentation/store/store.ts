import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storageSession from 'redux-persist/lib/storage/session'


import authReducer from './slices/authSlice'


const persistConfig = {
    key: 'root',
    storage: storageSession,
    whitelist: ['auth'] // Agregar 'settings' para persistirlo
    // blacklist: [], // Mantener la exclusión  de slides
}

const rootReducer = combineReducers({
    auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
})

const persistor = persistStore(store)

export { persistor }
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch