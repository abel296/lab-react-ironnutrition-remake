import { useState } from 'react';

function handleInputChange(e, setInput, filterFood) {
    const { value } = e.target
    setInput(value)
    filterFood(value)
}

export default function Search({ filterFood }) {
    const [input, setInput] = useState('')

    return (
        <>
            <div onSubmit={ e => e.preventDefault() }>
                <input type="text" className="input search-bar" name="search" placeholder="Search" value={ input } onChange={ (e) => handleInputChange(e, setInput, filterFood) }></input>
            </div>
        </>

    )
}