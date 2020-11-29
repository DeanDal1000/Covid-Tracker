import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'

const  Cards = (props) => {
    //Wrap in Container
    return ( <div className={styles.container}>
    <Grid container spacing={3} justify="center">
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">Real Data</Typography>
                <Typography color ="textSecondary">Real Date</Typography>
                <Typography variant="body2">Number of active cases of Covid-19</Typography>
            </CardContent>
        </Grid>
    </Grid>
    </div> );
}
 
export default Cards;