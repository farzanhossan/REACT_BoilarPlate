/*
 * File: auth.component.tsx
 * File Created: Sunday, 27th December 2020 10:57:36 am
 * -----
 * Last Modified: Sunday, 27th December 2020 6:08:17 pm
 * -----
 * Description
 */

import React from "react"
import { connect } from "react-redux"
import { logoutAction } from "../../@redux/logout/logout.actions"
import Sidebar from "../sidebar/sidebar.component"

const HomePage = ({payload, history, logoutAction}: any) => {

	const registerClick = (e: any) => {
		e.preventDefault()
		history.push("/register")
	}

	const logoutClick = (e: any) => {
		e.preventDefault()
		logoutAction()
		history.push("/")
	}
	return (
		<>
		<div>
			<h1> {payload.name} </h1>
			<Sidebar/>
			<h1>Hi</h1>
			For New User Create
			<button type="button" onClick={registerClick}>Register</button>
			<button type="button" onClick={logoutClick}>Logout</button>
		</div>
		</>
	)
}

//! Map our all state in redux root reducer objects.
const mapStateToProps = (state: any) => {
	return {
		payload: state.authState.data,
	}
}

export default connect(mapStateToProps,{logoutAction})(HomePage)
