import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import styles from './Cards.module.css'
//destructure API
const  Cards = ({ data: { confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return 'Loading...'
    }
    //Wrap in Container
    return ( <div className={styles.container}>
    <Grid container spacing={3} justify="center">
    {/* Card */}
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">{confirmed.value}</Typography>
                <Typography color ="textSecondary">Real Date</Typography>
                <Typography variant="body2">Number of active cases of Covid-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography variant="h5">Real Data</Typography>
                <Typography color ="textSecondary">Real Date</Typography>
                <Typography variant="body2">Number of recoveries of Covid-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5">Real Data</Typography>
                <Typography color ="textSecondary">Real Date</Typography>
                <Typography variant="body2">Number of deaths of Covid-19</Typography>
            </CardContent>
        </Grid>
    </Grid>
    </div> );
}
 
export default Cards;