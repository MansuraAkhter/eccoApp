import { applyMiddleware, createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(persistedReducer, applyMiddleware(thunk));
let persistor = persistStore(store);

export default store;
export { persistor };
