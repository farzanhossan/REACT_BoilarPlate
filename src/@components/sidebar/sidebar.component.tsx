/*
 * File: auth.component.tsx
 * File Created: Sunday, 27th December 2020 10:57:36 am
 * -----
 * Last Modified: Sunday, 27th December 2020 6:08:17 pm
 * -----
 * Description
 */

import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"
import { testAction } from "../../@redux/test/test.actions"

const Sidebar = ({ testAction, testDataState }: any) => {
	const [formData, setFormData] = useState({
		// id: testDataState?.data?.id
		id: ''
	});
	const { id }: any = useParams()
	useEffect(() => {
		testAction(id)
		setFormData({
			...formData,
			id: testDataState?.data?.id
		})
	}, []);


	console.log('eeeeeeeeeeeeeeeeeeeeeeee', formData);
	const onChange = (e: any) => {
		e.preventDefault()
	}
	return (
		<>
			<div>
				<h1>Sidebar</h1>
				<input type="text" name="id" onChange={onChange} value={formData.id} />
			</div>
		</>
	)
}
const mapStateToProps = (state: any) => {
	return {
		testDataState: state?.testState?.data,
	}
}

export default connect(mapStateToProps, { testAction })(Sidebar)
