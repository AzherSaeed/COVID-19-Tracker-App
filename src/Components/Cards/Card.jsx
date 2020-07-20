import React from 'react'
import {Card,  CardContent , Typography , Grid  } from '@material-ui/core';
import './Card.css';
import CountUp from 'react-countup';


 const Cards = ({data : { confirmed , recovered , deaths , lastUpdate}}) => {
    if(!confirmed){
        return 'Loading....'
    }
    console.log(lastUpdate)
    return (
        <div className= "container" >
           <Grid container spacing={3} justify="center" >

               {/* there is a Card one */}

               <Grid item component={Card} xs={12} md={3} className="infected , card" >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom >Infected</Typography>
                        <Typography variant="h5" >
                            <CountUp
                             start = {0}
                             end = {confirmed.value}
                             duration={2}
                             separator = ','
                            />
                        </Typography>
                            <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2" >Real Data</Typography>
                    </CardContent>
                </Grid>

               {/* there is a Card two */}
               <Grid item component={Card} xs={12} md={3} className="recovered , card" >
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom >Recovered</Typography>
                       <Typography variant="h5"  >
                       <CountUp
                             start = {0}
                             end = {recovered.value}
                             duration={2}
                             separator = ','
                            />
                       </Typography>
                       <Typography color="textSecondary"  >{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2" >No of recovries from COVID-19</Typography>
                   </CardContent>
               </Grid>


               {/* there is a Card There */}
               <Grid item component={Card} xs={12} md={3} className="infected , card" >
                   <CardContent>
                       <Typography color="textSecondary" gutterBottom >Deaths</Typography>
                       <Typography variant="h5" gutterBottom >
                       <CountUp
                             start = {0}
                             end = {deaths.value}
                             duration={2}
                             separator = ','
                            />
                       </Typography>
                       <Typography color="textSecondary" gutterBottom >{new Date(lastUpdate).toDateString()}</Typography>
                       <Typography variant="body2" gutterBottom >No of Deaths caused by COVID-19 </Typography>
                   </CardContent>
               </Grid>
               
           </Grid>
        </div>
    )
}
export default Cards;