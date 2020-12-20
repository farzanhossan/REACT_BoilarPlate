import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom"

import React from "react"
import Todo from "./@pages/todo-page/todo.page.component"
import User from "./@pages/user-page/user.page.component"

const App = () => {
	return (
		<Router>
			<Link to="/user">User</Link>
			<Switch>
				<Route exact={true} path="/todo" component={Todo} />
				<Route exact={true} path="/user" component={User} />
			</Switch>
		</Router>
	)
}

export default App
