import { React, useState } from 'react'

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setinputValue] = useState("")
    const onInputChange = (e) => {
        setinputValue(e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        onAddCategory(inputValue)
        setinputValue("")
    }

    return (
        <form onSubmit={(e) => onSubmit(e)} >
            <input
                type="text"
                placeholder='Search'
                value={inputValue}
                onChange={(e) => onInputChange(e)}
            />
        </form>
    )
}
