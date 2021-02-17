'use strict';

import React from 'react';

export default class Author extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.author.firstName}</td>
				<td>{this.props.author.middleName}</td>
				<td>{this.props.author.lastName}</td>
			</tr>
		)
	}
}