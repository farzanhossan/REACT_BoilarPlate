import { RegisterTypes } from "./register.types"
const INITIAL_STATE = {
	data: "",
}

const registerReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case RegisterTypes.REGISTER_SUCCESS:
			return {
				data: action.payload,
			}
		default:
			return state
	}
}
export default registerReducer
