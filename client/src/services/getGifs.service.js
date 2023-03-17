export default async function getGifsService(name) {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/gif/getSingleGif/${name}`)
        return response.json()
    } catch (error) {
        console.error(error)
    }
}