import { TodoTypes } from "./todo.types"

const INITIAL_STATE = {
	loading: false,
	todo: [],
}

const todoReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case TodoTypes.GET_TODO_START:
			return {
				...state,
				loading: true,
			}
		case TodoTypes.GET_TODO_SUCCESS:
			return {
				...state,
				loading: false,
				todo: action.payload,
			}
		case TodoTypes.GET_TODO_END:
			return {
				...state,
				loading: false,
			}
		default:
			return state
	}
}

export default todoReducer
