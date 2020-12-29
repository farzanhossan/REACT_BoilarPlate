import React, { useState } from "react"

import { connect } from "react-redux"
import { loginAction } from "../../@redux/login/login.actions"

const Auth = ({ loginAction, payload, history }: any, props: any) => {
	if (payload.roleName === 'Admin') {
		history.push("/home")
	}
	const [formData, setFormData] = useState({
		pinNumber: "",
		password: "",
	})

	const onChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}
	// console.log(formData)
	const onSubmitHandler = (e: any) => {
		e.preventDefault()
		loginAction(formData.pinNumber, formData.password)
	}
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<label>Pin Number:</label>
				<input type="text" name="pinNumber" onChange={onChange} /><br/>
				<label>Password:</label>
				<input type="password" name="password" onChange={onChange} />
				<button type="submit">Submit</button>
			</form>

		</>
		
	)
}

//! Map our all state in redux root reducer objects.
const mapStateToProps = (state: any) => {
	return {
		payload: state.authState.data,
	}
}

export default connect(mapStateToProps, { loginAction })(Auth)
