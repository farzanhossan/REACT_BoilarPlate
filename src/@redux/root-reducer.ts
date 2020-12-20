import { persistReducer, persistStore } from "redux-persist"

import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import todoReducer from "./todo/todo.reducer"

const persistConfig = {
	key: "root",
	storage,
	whiteList: [],
}

const rootReducer = combineReducers({
	todoState: todoReducer,
})

export default persistReducer(persistConfig, rootReducer)
