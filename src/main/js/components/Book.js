import React from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

function Book(props) {

    return (
        <Grid container justify="center" direction="row">
            <Grid item>
                <Grid container direction="column">
                    <Grid item>
                        <Typography paragraph>
                            Image
                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column">
                    <Typography paragraph>
                        {props.title}
                    </Typography>
                    <Typography paragraph>
                        Author
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Book;