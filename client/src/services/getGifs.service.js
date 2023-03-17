export default async function getGifsService(name) {
    try {
        return await (await fetch(`${ process.env.REACT_APP_BASE_URL }/gif/getSingleGif/${ name }`)).json()
    } catch (error) {
        console.error(error)
    }
}