import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    footer: {
        display: 'flex',
        justifyContent: 'center'
    }
});

function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography variant="body1" align="center">
                &copy; Nicholas Ngare. All rights reserved.
            </Typography>
        </footer>
    );
}

export default Footer;