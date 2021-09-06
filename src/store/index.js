import { createStore, combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { routerReducer } from "react-router-redux";
import globalReducer from "../redux/global/reducerI18";

const persistConfig = {
    key: "root",
    storage,
};


const rootReducer = combineReducers({
    globalReducer: globalReducer,
    routing: routerReducer
});


const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);


export const store = createStore(persistedReducer);
export const persistor = persistStore(store);