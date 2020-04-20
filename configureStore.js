import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import { persistReducer, persistStore } from "redux-persist";
// import storage from "redux-persist/lib/storage";
import { AsyncStorage } from "react-native";
import thunk from "redux-thunk";
import reducers from "./reducers/";
import { composeWithDevTools } from "redux-devtools-extension";

// 永続化の設定
const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["general"], // 永続化するstoreの指定
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store);

export default { store, persistor };
