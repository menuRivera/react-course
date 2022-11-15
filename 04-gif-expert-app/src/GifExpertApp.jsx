import { useState } from 'react'
import { GifGrid, AddCategory } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch'])

    const onAddCategory = (newCat) => {
        if (categories.includes(newCat)) return

        setCategories([newCat, ...categories])
        // setCategories(cat => [...cat, newCat])
    }

    return (
        <>
            <h1>Gif Expert App</h1>

            <AddCategory onNewValue={onAddCategory} />

            {categories.map(cat => <GifGrid category={cat} key={cat} />)}
        </>
    )

}