import React from 'react';

import { Cards, Chart, Country } from './components';
import styles from './App.module.css'
import { fetchData } from './api'
import headerImage from './components/images/image.png'

class App extends React.Component {


  state = {
    data: {},
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    //destructure
    const { data } = this.state
    return (
      <div className={styles.container}>
      {/* <img className={styles.image} src={headerImage} alt="COVID-19"/> */}
      {/* destructure data */}
       <Cards data={data}/>
       {/* <Chart /> */}
       {/* <Country /> */}

      </div>
    )
  }
}

export default App;
