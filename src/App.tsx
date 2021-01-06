/*
 * File: App.tsx
 * File Created: Sunday, 27th December 2020 10:50:06 am
 * -----
 * Last Modified: Sunday, 27th December 2020 6:08:05 pm
 * -----
 * Description
 */

import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import SidebarComponent from "./@components/sidebar/sidebar.component"
import Test from "./@components/testBar/test.component"


const App = () => {
	return (
		<Router>
			<Switch>
				{/* <Route exact={true} path="/" component={Auth} />
				<Route exact={true} path="/home" component={HomePage} />
				<Route exact={true} path="/register" component={Register} /> */}

				<Route exact={true} path="/" component={Test} />
				<Route exact={true} path="/:id" component={SidebarComponent} />

			</Switch>
		</Router>
	)
}

export default App
