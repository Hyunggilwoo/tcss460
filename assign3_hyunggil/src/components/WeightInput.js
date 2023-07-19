import React, { useState } from 'react'

const WeightInput = ({ newWeight, setNewWeight}) => {

    const handleAddWeight = (event) => {
        console.log(event.target.value)
        setNewWeight(event.target.value);
    }

    return (
        <div>
        weight: <input 
                  value={newWeight}
                  onChange={handleAddWeight}/>
      </div>
    )
}

export default WeightInput;