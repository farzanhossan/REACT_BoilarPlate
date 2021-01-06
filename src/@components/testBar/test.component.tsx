/*
 * File: auth.component.tsx
 * File Created: Sunday, 27th December 2020 10:57:36 am
 * -----
 * Last Modified: Sunday, 27th December 2020 6:08:17 pm
 * -----
 * Description
 */

import React, { useEffect } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { testAction } from "../../@redux/test/test.actions"

const Test = () => {
	const history = useHistory()

	const onClicked = () => {
		history.push('/1')
	}

	return (
		<>
			<div>
				<h1 onClick={onClicked}>Test</h1>

			</div>
		</>
	)
}


export default connect(null, null)(Test)
