import React from 'react'

const Filter = ({value, onChange}) => {
    return (
        <div>
            <p>Find Countries</p> 
            <input value={value} onChange={onChange} />
        </div>
    )

}

export default Filter;