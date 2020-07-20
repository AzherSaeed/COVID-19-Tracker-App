import React , {useState , useEffect} from 'react'
import { NativeSelect , FormControl } from '@material-ui/core'
import {fetchCountries} from '../../Api'
import './CountryPicker.css'


 const CountryPicker = ({selectedCountry}) => {
     const [fetchedCountries , setFetchedCountries] = useState([])

     useEffect(() => {
        const fetchApi = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchApi();
     }, [setFetchedCountries])
    return (
       <FormControl className="formControl" >
           <NativeSelect defaultValue="" onChange={(e) => selectedCountry(e.target.value)} >
               <option value="" >Global</option>
    {fetchedCountries.map((country , i) => <option key={i} value={country} >{country}</option>)}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;