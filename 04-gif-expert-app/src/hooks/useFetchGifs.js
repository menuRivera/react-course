import { useState, useEffect } from "react"
import { getGifs } from '../helpers/getGifs'

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
        const newImgs = await getGifs(category)
        setImages(newImgs)
        setIsLoading(false)
    }

    useEffect(() => {
        // Esto esta bien, pero no es tan común
        // getGifs(category)
        //     .then(imgs => {
        //         setImages(imgs)
        //     })
        getImages() // Esto es más común
    }, [])

    return {
        images,
        isLoading
    }
}