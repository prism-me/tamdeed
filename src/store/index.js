import { createStore, combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalReducer from "../redux/global/reducers";

const persistConfig = {
    key: "root",
    storage,
};


const rootReducer = combineReducers({
    globalReducer: globalReducer,
});


const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);


export const store = createStore(persistedReducer);
export const persistor = persistStore(store);