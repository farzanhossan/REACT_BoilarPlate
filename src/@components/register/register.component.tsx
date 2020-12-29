import React, { useState } from "react"
import { connect } from "react-redux"
import { registerAction } from "../../@redux/register/register.actions"


const Register = ({payload, registerAction, token}: any) => {
	const items: any = []
	payload?.roles.map((role: any) => {
		items.push(<option value={role.id}>{role.roleName}</option>)
	})

	const [formData, setFormData] = useState({
		name: "",
		email: "",
		pinNumber: "",
		designation: "",
		role: "",
		password: "",
		active: "1"
	})

	const onChange = (e: any) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const onSubmitHandler = (e: any) => {
		e.preventDefault()
		registerAction(formData,token)
	}
	console.log(formData);
	return (
		<>
			<form onSubmit={onSubmitHandler}>
				<label>Name:</label>
				<input type="text" name="name" onChange={onChange} /><br/>
				<label>Email:</label>
				<input type="email" name="email" onChange={onChange} /><br/>
				<label>PinNumber:</label>
				<input type="pinNumber" name="pinNumber" onChange={onChange}  /><br/>
				<label>Designation:</label>
				<input type="Designation" name="designation" onChange={onChange}  /><br/>
				<label>Role:</label>
				<select id="items" name="role" onChange={onChange}>
					{items}
				</select><br/>
				<label>Password:</label>
				<input type="password" name="password" onChange={onChange}  /><br/>
				<button type="submit">Submit</button>
			</form>
		</>
	)
}

//! Map our all state in redux root reducer objects.
const mapStateToProps = (state: any) => {
	console.log('State from Register Component', state);
	return {
		payload: state.roleState.data,
		token: state.authState.data.token
	}
}

export default connect(mapStateToProps, {registerAction})(Register)
