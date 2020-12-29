import React, { useState } from 'react'

const Input = (props) => {
    const [text, setText] = useState('')

    const handleChange = (e) => {
        setText(e.target.value)
}; 

const handleSubmit = (e) => {
    e.preventDefault();
    props.characters(text);
};

    return (
        <form className="input" onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Search Characters"
                onChange={handleChange}
                value={text}
            />
        </form>
    )
}

export default Input
