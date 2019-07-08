import React, { useEffect, useState } from 'react';
// import styled from "styled-components";
import axios from 'axios';
import SelectButton from '../select/select-button';
import ToggleSelect from '../toggle-select/toggle-select';


const API_URL = `https://api.punkapi.com/v2/beers`
const BeerList = () => { 
  const [beerBox, setBeerBox] = useState([])

  useEffect(() => {
    axios
      .get(API_URL)
      .then(
        ({data}) => {
          setBeerBox(data)
        }
      )
      
  }, [])

  const arataNumeleBerilor = () => {
    return beerBox.map(
      ({name}) => { 
        return (<div>{name}</div>)
      }
    )
  }

  return (
    <div> 
      {/* <SelectButton/> */}
      <ToggleSelect/>
      {arataNumeleBerilor()}
    </div>
  )

}

export default BeerList
