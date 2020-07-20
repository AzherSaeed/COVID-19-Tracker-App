import React from 'react'
import {Cards , Chart , CountryPicker} from './Components'
import  './App.module.css'
import {fetchData} from './Api'
import CoronaImage from './Images/637206487366917227691.jpg';


class App extends React.Component {
    state  = {
        data : {},
        country : ''
    }

    async componentDidMount () {
        const displayData = await fetchData ();
        this.setState({data : displayData})
    }
        handleCountryChanged = async(country) => {
            const displayData = await fetchData (country);
            this.setState({data : displayData , country : country})
        }
        
    render () {
       
        return (
            <div id="container"> 
                <img className="image"  src={CoronaImage} alt="Covid19"/>
                <Cards  data ={this.state.data} />
                <Chart data={this.state.data} country={this.state.country} />
                <CountryPicker selectedCountry={this.handleCountryChanged} />
            </div>
        )
    }
}

export default App
