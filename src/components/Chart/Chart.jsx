// import React, { useState , useEffect } from 'react';
// import { fetchDailyData } from '../../api';
// import { lineChart, barChart } from 'react-chartjs-2'
// import styles from './Chart.module.css'

// const  Chart = () => {
//     const [dailyData, setDailyData] = useState({});

//     useEffect(() => {
//         const fetchAPI = async () => {
//             setDailyData(await fetchDailyData());
//         }
//         //call API fucntion
//         fetchAPI()
//     });

//     const lineChart = (
//     dailyData[0]
//         ? (
//         <Line 
//             data={{
//                 labels: '',
//                 datasets:[{}, {}],
//             }}
//         />) : null
//         );

//     return ( <h1>Chart</h1>  );
// }
 
// export default Chart;