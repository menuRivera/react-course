import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs'
import { GifItem } from './GifItem'

export const GifGrid = ({ category }) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImgs = await getGifs(category)
        setImages(newImgs)
    }

    useEffect(() => {
        // Esto esta bien, pero no es tan común
        // getGifs(category)
        //     .then(imgs => {
        //         setImages(imgs)
        //     })
        getImages() // Esto es más común
    }, [])

    return (
        <>
            <h3>{category}</h3>
            {/* {images} */}
            <div className='card-grid'>
                {
                    images.map(img => (
                        // <li key={img.id}>
                        //     {img.title}
                        // </li>
                        <GifItem key={img.id} {...img} />
                    ))
                }
            </div>
        </>
    )
}
