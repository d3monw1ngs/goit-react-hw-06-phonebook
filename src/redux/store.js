import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { contactsSlice } from "./contactsSlice";
import { filterSlice } from "./filterSlice";

const rootReducer = combineReducers({
    contacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts'],
};


const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: false,
        }),       
    });

const persistor = persistStore(store);

export { store, persistor };

