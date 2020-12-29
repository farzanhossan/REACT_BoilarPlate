import Axios from "axios"
import { RegisterTypes } from "./register.types"

export const registerAction = (data: any, token: any) => async (
	dispatch: any
) => {
	try {
		console.log('fromreeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',data)
		const res = await Axios.post("http://localhost:8000/v1/api/admin/create-hosts", data, { headers: {"Authorization" : `Bearer ${token}`}})
		dispatch({
			type: RegisterTypes.REGISTER_SUCCESS,
			payload: res.data,
		})
	} catch (error) {
		dispatch({
			type: RegisterTypes.REGISTER_FAILED,
		})
	}
}
