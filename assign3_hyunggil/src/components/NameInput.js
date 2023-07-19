import React, { useState } from 'react'

const NameInput = ({ newName, setNewName }) => {

    const handleAddPerson = (event) => {
        console.log(event.target.value)

        setNewName(event.target.value)
    }

    return (
        <div>
        name: <input 
                value={newName}
                onChange={handleAddPerson}
            />
        </div>
    )
}

export default NameInput;