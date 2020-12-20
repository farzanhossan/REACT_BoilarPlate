import Axios from "axios"
import { TodoTypes } from "./todo.types"

export const todoAction = () => async (dispatch: any) => {
	dispatch({
		type: TodoTypes.GET_TODO_START,
	})
	try {
		const res = await Axios.get("https://jsonplaceholder.typicode.com/posts")
		dispatch({
			type: TodoTypes.GET_TODO_SUCCESS,
			payload: res.data,
		})
	} catch (error) {
		dispatch({
			type: TodoTypes.GET_TODO_END,
		})
	}
}
