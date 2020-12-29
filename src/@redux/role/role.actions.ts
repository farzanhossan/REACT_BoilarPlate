import Axios from "axios"
import { RoleTypes } from "./role.types"

export const roleAction = (token: any) => async (
	dispatch: any
) => {
	try {
		const res = await Axios.get("http://localhost:8000/v1/api/role/", { headers: {"Authorization" : `Bearer ${token}`}})
		dispatch({
			type: RoleTypes.ROLE_GET_SUCCESS,
			payload: res.data,
		})
	} catch (error) {
		dispatch({
			type: RoleTypes.ROLE_GET_FAILED,
		})
	}
}
