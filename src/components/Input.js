import React, { useState } from 'react'

const Input = (props) => {
    
    return (
        <div className="input">
            <input 
                type="text"
                placeholder="Search Characters"
                onChange={(e) => props.characters(e.target.value)}
            />
        </div>
    )
}

export default Input