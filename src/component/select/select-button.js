import React, {useState} from 'react'

const SelectButton = () => {
  const [which, setWhich] = useState("name")
  const handleSelect = (value) => {
    console.log(value)
    if (value !== "name" && which === "name") {
      // which = value
      setWhich(value)
      return
    }
    setWhich(value)
  }
  const optionList = ["name", "abv"]
  return (
    <span>
      {optionList.map(haha => 
        <button onClick={() => handleSelect(haha)}>{haha} - {haha === which ? "selected" : "notselected"}</button>
      )}
    </span>
  )
}


export default SelectButton