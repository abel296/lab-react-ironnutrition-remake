const express = require('express')
const router = express.Router()
const axios = require('axios')
require('dotenv').config()

// Endpoints
router.get('/getSingleGif/:name', async (req, res) => {
    const { name } = req.params

    const gifApiURL = `https://api.giphy.com/v1/gifs/search?api_key=${process.env.API_GIPHY_KEY}&q=${ name }&limit=1&offset=0&rating=g&lang=en`

    const gifs = await axios.get(gifApiURL)
    const { data: { data: [gifUrl] } } = gifs
    res.json(gifUrl.images['downsized_medium'].url)
})

module.exports = router
