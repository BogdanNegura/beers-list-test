import React, { useEffect, useState } from 'react';
// import styled from "styled-components";
import axios from 'axios';

const BeersContainer = () => {
  const [ apiBeers, modificaApiBeers ] = useState([])
  const [ selection, xxxSelection ] = useState(["Beer name"])
  const [ base, setBase ] = useState("")
  
  useEffect(
    () => {
      axios 
        .get(`https://api.punkapi.com/v2/beers`)
        .then( res => {
          modificaApiBeers(res.data)
        })
    }, []
  )


  return (
    <div>
      {apiBeers.map(
        ({ name, id, ...restulCelorCeErau }) => {
          console.log(name, restulCelorCeErau)
          return <p>{name}</p>
        }
      )}
    </div>
  )
}

export default BeersContainer
