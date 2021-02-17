'use strict';

import React from 'react';
import Author from './Author';

export default class AuthorList extends React.Component{
	render() {
		const authors = this.props.authors.map(author =>
			<Author key={author._links.self.href} author={author}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Middle Name</th>
						<th>Last Name</th>
					</tr>
					{authors}
				</tbody>
			</table>
		)
	}
}