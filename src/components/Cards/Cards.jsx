import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup'
import styles from './Cards.module.css'
import cx from 'classnames'

//destructure the data then API
const  Cards = ({ data: { confirmed, recovered, deaths, lastUpdate} }) => {
    if(!confirmed) {
        return 'Loading...'
    }
    //Wrap in Container
    return ( <div className={styles.container}>
    <Grid container spacing={3} justify="center">
    {/* Card */}
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Infected</Typography>
                <Typography variant="h5">{confirmed.value}</Typography>
                {/* counter */}
                <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of active cases of Covid-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                <Typography variant="h5">{recovered.value}</Typography>
                <CountUp start={0} end={recovered.value} duration={2.5} separator=","/>
                <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of recoveries of Covid-19</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5">{deaths.value}</Typography>
                <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                <Typography color ="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">Number of deaths of Covid-19</Typography>
            </CardContent>
        </Grid>
    </Grid>
    </div> );
}
 
export default Cards;