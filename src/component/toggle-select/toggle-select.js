import React, {useState} from 'react'
import { StyledToggle, StyledOption, StyledSelected} from './toggle-select.style';

const ToggleSelect = () => {
  const [optionList, setOptionList] = useState([
    {selected: true, label: "Name", value: "name"},
    {selected: false, label: "Abreviation", value: "abv"},

  ])
  const handleClick = () => {
    setOptionList(optionList.map(
      option => ({...option, selected: !option.selected})
    ))
  }
  const getLeft = ()=> {
    return optionList
      .map(
        ({ selected }, key) => ({ selected, key })
      )
      .filter(
        ({ selected }) => selected
      )
      .map(
        ({ key }) => key
      )
      .reduce(a => a)
  }
  console.log(getLeft())
  return ( 
    <StyledToggle
    onClick={handleClick}>
      <StyledSelected left={getLeft()}/>
      {optionList
        .map(({label}) => 
          <StyledOption>{label}</StyledOption>
        )
      }
    </StyledToggle>
  )
}

export default ToggleSelect