import { RoleTypes } from "./role.types"
const INITIAL_STATE = {
	data: "",
}

const roleReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case RoleTypes.ROLE_GET_SUCCESS:
			return {
				data: action.payload,
			}
		default:
			return state
	}
}
export default roleReducer
