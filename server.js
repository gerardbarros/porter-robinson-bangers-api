const express = require("express")
const app = express()
const PORT = 4000

const songName = {
    "say my name":{
        "releaseYear": 2010,
        "album": "Say My Name",
        "songLink": "https://www.youtube.com/watch?v=f9_apoZ4eKk"
    },
    
    "leaving":{
        "releaseYear": 2010,
        "album": "",
        "songLink": "https://youtu.be/Vfp25hFLhbs"
    },

    "language":{
        "releaseYear": 2012,
        "album": "Language",
        "songLink": "https://youtu.be/lPSkGDm4Spg"
    },

    "fresh static snow":{
        "releaseYear": 2014,
        "album": "Worlds",
        "songLink": "https://youtu.be/op3Jfq0qtNQ"
    },

    "look at the sky":{
        "releaseYear": 2021,
        "album": "Nurture",
        "songLink": "https://youtu.be/TJBh_hj6DzE"
    }
}


app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})

app.get("/api/:album", (req, res) => {
    const songInfo = req.params.album.toLowerCase()
    if( songName[songInfo]){
        res.json(songName[songInfo])
    } else {
        res.json(null)
    }
    
})

