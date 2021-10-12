import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from "redux";
import { authReducer } from "../redux/users/reducers";
import {
    persistStore,
    persistReducer,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { all, fork } from "redux-saga/effects";
import globalReducer from "../redux/global/reducers";
import globalWatcher from "../redux/global/sagas";

const persistConfig = {
    key: "root",
    storage,
};

function* rootSaga() {
    yield all([fork(globalWatcher)]);
}

const rootReducer = combineReducers({
    globalReducer: globalReducer,
    userReducer: authReducer,
});

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
);

const sagaMiddleware = createSagaMiddleware();

let enhancer;
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
    enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
        applyMiddleware(sagaMiddleware)
    );
} else {
    enhancer = compose(applyMiddleware(sagaMiddleware));
}

export const store = createStore(
    persistedReducer,
    enhancer
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
