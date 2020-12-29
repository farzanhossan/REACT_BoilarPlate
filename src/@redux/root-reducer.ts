import { combineReducers } from "redux"
import loginReducer from "./login/login.reducer"
import { persistReducer } from "redux-persist"
import registerReducer from "./register/register.reducer"
import roleReducer from "./role/role.reducer"
import storage from "redux-persist/lib/storage"

const persistConfig = {
	key: "root",
	storage,
	whitelist: ["authState"],
}

const appReducer = combineReducers({
	authState: loginReducer,
	roleState: roleReducer,
	registerReducer: registerReducer,
})
const rootReducer = (state: any, action: any) => {
	// when a logout action is dispatched it will reset redux state
	if (action.type === "LOG_OUT") {
		state = undefined
		storage.removeItem("persist:root")
	}

	return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)