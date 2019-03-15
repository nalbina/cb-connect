import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'

class DashboardSidebar extends Component {
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<>
				<p className='font-weight-normal'>What are you looking for?</p>
				<ListGroup as='ul'>
					{ this.props.sections.map(item => {
							const key = this.props.sections.indexOf(item)
							return <ListGroup.Item action key={key}>{ item }</ListGroup.Item>
						})
					}
				</ListGroup>
			</>
		)
	}
}

export default DashboardSidebar