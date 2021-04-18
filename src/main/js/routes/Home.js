import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Content from '../components/Content';

class Home extends React.Component {
	render() {
		return (
			<React.Fragment>
				<CssBaseline />
				<Grid container direction="column" justify="center">
					<Grid item>
						<Navigation />
					</Grid>
					<Grid item container>
						<Content />
					</Grid>
					<Grid item container justify="center">
						<Footer />
					</Grid>
				</Grid>
			</React.Fragment>
		);
	}
}

export default Home;