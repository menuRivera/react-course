import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', "Dragon Ball"])

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