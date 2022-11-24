export const fileUpload = async (file) => {
    if (!file) throw new Error('no hay archivo a subir')

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dwueyu632/upload'

    const formData = new FormData()
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {
        const res = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        })

        if (!res.ok) throw new Error('no se pudo subir la imágen')

        const cloudRes = await res.json()

        return cloudRes.secure_url
    } catch (error) {
        console.error(error);
    }
}