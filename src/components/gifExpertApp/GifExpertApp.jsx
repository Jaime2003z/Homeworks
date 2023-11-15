import { React, useState } from 'react'
import { AddCategory } from '../addCategory/AddCategory'
import { GifGrid } from '../gifGrid/GifGrid'

export const GiftGridExpertApp = () => {
    const [categories, setCategories] = useState(["Birth"])
    const onAddCategory = (category) => {
        setCategories(list => [...list, category])
    }

    return (
        <>
            <h3>GifExpert</h3>
            <AddCategory onAddCategory={onAddCategory} />
            {
                categories.map(
                    (category, key) => {
                        return <GifGrid category={category} key={key} />
                    }
                )
            }
        </>
    )
}