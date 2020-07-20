import React, { useState  , useEffect} from 'react'
import {fetchDailyData} from '../../Api'
import { Line  , Bar } from 'react-chartjs-2';
import  './Chart.css'

 const Charts = ({data : {confirmed , recovered , deaths} , country}) => {
     const [dailyData , setDailyData] = useState([])

     useEffect(() => {
         const fetchAPI = async () => {
             setDailyData(await fetchDailyData())} 
             fetchAPI()
     } , [])
     const lineChar = (
        dailyData.length ? (
            <Line
               data={{
                   labels : dailyData.map (({date}) => date ),
                   datasets : [{
                       data : dailyData.map(({confirmed}) => confirmed),
                       label: 'Infected',
                       borderColor : '#3333ff',
                       fill : true 
                   } , {
                    data : dailyData.map(({deaths}) => deaths),
                    label: 'Deaths',
                    borderColor : 'red',
                    backgroundColor : 'rgba(255, 0 , 0 , 0.5)',
                    fill : true 
                   }]
               }}
            /> 
       ) : null
     )
     const BarChart = (
         confirmed ? (
             <Bar 
                data={{
                    labels : ['infected' , 'recovered' , 'deaths'],
                    datasets : [{
                        label : 'People',
                        backgroundColor : [
                            ' rgba(0, 0, 255, 0.5)',
                            'rgba(0, 255, 0, 0.5)',
                            'rgba(255, 0, 0, 0.5)'
                        ],
                        data : [confirmed.value , recovered.value , deaths.value]
                    }]
                }}
                options ={{
                    legends : {display : false},
                    title : {display : true, text :  `Current state in ${country}`},
                }}
             /> 
         ) : null
     )
    return (
        <div className="container" >
            {country ? BarChart : lineChar}
        </div>
    )
}
export default Charts;