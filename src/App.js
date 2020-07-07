import React from 'react'
import {Cards , Chart , CountryPicker} from './Components'

class App extends React.Component {
    render () {
        return (
            <div>
                <h1>App</h1>
                <Cards/>
                <Chart/>
                <CountryPicker/>
            </div>
        )
    }
  
}

export default App
