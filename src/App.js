import React from 'react'
import {Cards , Chart , CountryPicker} from './Components'
import Styles from './App.module.css'
import {fetchData} from './Api'

class App extends React.Component {
    state  = {
        data : {}
    }

    async componentDidMount () {
        const displayData = await fetchData ();
        this.setState({data : displayData})
    }

    render () {
       
        return (
            <div className={Styles.container} >
                
                <Cards  data ={this.state.data} />
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
}

export default App
