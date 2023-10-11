import {React,useState} from 'react'

export const AddCategory = ({onAddCategory}) => {

    const [inputValue, setinputValue] = useState("...")
    const onInputChange = (event) => {
        setinputValue(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        onAddCategory(inputValue)
        setinputValue("")
    }

  return (
    <>
        <form onSubmit={(event) => onSubmit(event)} >
            <input
                type="text"
                placeholder='Search'
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
        </form>
    </>
  )
}
