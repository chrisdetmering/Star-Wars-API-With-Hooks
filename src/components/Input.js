import React, { useState } from 'react'

const Input = (props) => {
    
    return (
        <form className="input">
            <input 
                type="text"
                placeholder="Search Characters"
                onChange={(e) => props.characters(e.target.value)}
            />
        </form>
    )
}

export default Input