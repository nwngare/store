import React from 'react';
import Navigation from '../Navigation';
import Container from 'react-bootstrap/Container';

function Layout({ children }) {
    return (
        <React.Fragment>
            <Navigation />
            <Container className="mt-4 mb-4">
                {children}
            </Container>
            <footer style={{ textAlign: 'center' }}>
                &copy; Nicholas Ngare. All rights reserved.
            </footer>
        </React.Fragment>
    );
}

export default Layout;