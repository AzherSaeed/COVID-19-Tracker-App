import React from 'react'
import {Cards , Chart , CountryPicker} from './Components'
import Styles from './App.module.css'
import {fetchData} from './Api'

class App extends React.Component {

    async componentDidMount () {
        const data = await fetchData();

        console.log(data)
    }
    render () {
        return (
            <div className={Styles.container} >
                <h1>App</h1>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
  
}

export default App
