import {React, useState} from 'react'

export const Category = () => {
    const [categories, setCategories] = useState(["First Category"])
    const [category, setCategory] = useState("")

    const onSetCategory = (event) => {
        setCategory(event.target.value)
    };

    const onAddCategory = () => {
        setCategories(list => [...list, category])
        setCategory("")
    }
    
  return (
    <>
        <h1>gifExpert</h1>
        <input type="text" value={category}
            onChange={(event) => onSetCategory(event)}/>
        <button onClick={() => onAddCategory()}>Add Category</button>

        <ol>
            {
                categories.map((category,key) =>{return <li key={key}>{category}</li>})
            }
        </ol>
    </>
  )
}
