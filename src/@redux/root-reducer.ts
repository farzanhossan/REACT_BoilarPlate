import { persistReducer, persistStore } from "redux-persist"

import { combineReducers } from "redux"
import storage from "redux-persist/lib/storage"
import todoReducer from "./todo/todo.reducer"
import loginReducer from "./login/login.reducer"
import roleReducer from "./role/role.reducer"
import registerReducer from "./register/register.reducer"

const persistConfig = {
	key: "root",
	storage,
	whiteList: [''],
}

const rootReducer = combineReducers({
	todoState: todoReducer,
	authState: loginReducer,
	roleState: roleReducer,
	registerReducer: registerReducer
})

export default persistReducer(persistConfig, rootReducer)
/*
 * File: root-reducer.ts
 * File Created: Sunday, 27th December 2020 10:50:06 am
 * -----
 * Last Modified: Sunday, 27th December 2020 10:54:18 am
 * -----
 * Description
 */





