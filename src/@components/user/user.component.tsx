import React, { useEffect } from "react"

import { connect } from "react-redux"
import { todoAction } from "../../@redux/todo/todo.action"

const User = ({ loading, todo, todoAction }: any) => {
	useEffect(() => {
		todoAction()
	}, [todoAction])
	return (
		<div>
			<h1>User</h1>
			<div>
				{loading ? (
					<h1>Loading...</h1>
				) : (
					todo?.map((todo: any) => <h1 key={todo.id}>{todo.title}</h1>)
				)}
			</div>
		</div>
	)
}
const mapStateToProps = (state: any) => {
	return {
		loading: state.todoState.loading,
		todo: state.todoState.todo,
	}
}

export default connect(mapStateToProps, { todoAction })(User)
