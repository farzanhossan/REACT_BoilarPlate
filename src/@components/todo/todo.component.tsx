import React, { useEffect, useState } from "react"

import axios from "axios"
import { connect } from "react-redux"
import { todoAction } from "../../@redux/todo/todo.action"

const Todo = ({ todoAction, loading, todo }: any) => {
	useEffect(() => {
		todoAction()
	}, [])

	return (
		<div>
			<h1>Todo</h1>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				todo?.map((todo: any) => <h1 key={todo.id}>{todo.title}</h1>)
			)}
		</div>
	)
}

const mapStateToProps = (state: any) => {
	return {
		loading: state.todoState.loading,
		todo: state.todoState.todo,
	}
}

export default connect(mapStateToProps, { todoAction })(Todo)
