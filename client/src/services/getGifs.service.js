export default async function getGifsService(name) {
    try {
        const response = await fetch(`http://localhost:5000/gif/getSingleGif/${name}`)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}