import React, { useState } from 'react'


const Input = (props) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)

        if (text.length > 0) {
            props.characters.filter((character) => {
                return character.name.match(text);
            })
        }
    } 

    return (
        <div>
            <input 
            type="text" 
            placeholder="Search Characters"
            value={text}
            onChange={handleChange}
            />

           
            
        </div>
    )
}

export default Input
