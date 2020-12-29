/*
 * File: login.actions.ts
 * File Created: Sunday, 27th December 2020 10:51:32 am
 * -----
 * Last Modified: Sunday, 27th December 2020 11:10:24 am
 * -----
 * Description
 */

import Axios from "axios"
import { LoginTypes } from "./login.types"

export const loginAction = (pinNumber: any, password: any) => async (
	dispatch: any
) => {
	try {
		const data = {
			pinNumber, password
		}
		const res = await Axios.post("http://localhost:8000/v1/api/auth/login", data)
		dispatch({
			type: LoginTypes.LOGIN_SUCCESS,
			payload: res.data,
		})
	} catch (error) {
		dispatch({
			type: LoginTypes.LOGIN_FAILED,
		})
	}
}
