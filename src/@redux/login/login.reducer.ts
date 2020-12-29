import { LoginTypes } from "./login.types"

/*
 * File: login.reducer.ts
 * File Created: Sunday, 27th December 2020 10:51:41 am
 * -----
 * Last Modified: Sunday, 27th December 2020 10:56:23 am
 * -----
 * Description
 */
const INITIAL_STATE = {
	data: "",
}

const loginReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case LoginTypes.LOGIN_SUCCESS:
			return {
				data: action.payload,
			}
		default:
			return state
	}
}
export default loginReducer
