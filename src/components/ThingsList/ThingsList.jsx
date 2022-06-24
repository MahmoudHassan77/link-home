import React, { useState } from 'react'
import ThingCard from '../ThingCard/ThingCard'

const ThingsList=()=> {
    // Getting cards from API
    //const {dbData} = useFetch([],"")
    const [data] = useState([
       {id:10,title:"Transformation",src:`./thingsphotos/${5}.png`},
       {id:20,title:"Envision",src:`./thingsphotos/${2}.png`},
       {id:30,title:"Dynamics 365",src:`./thingsphotos/${3}.png`},
       {id:40,title:"Crafty Mind",src:`./thingsphotos/${4}.png`},
       {id:50,title:"Services",src:`./thingsphotos/${5}.png`},
    ])

    return (
      <>
      {data.map((card)=>(
        <ThingCard key={card.id} src={card.src} title={card.title} />
        ))}
        <div></div>
      </>
    )
  }

export default ThingsList