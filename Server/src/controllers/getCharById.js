const axios = require("axios")
const URL = require("http://rickandmortyapi.com/api/character/")


export function getCharById (res, id){
    axios.get(`http://rickandmortyapi.com/api/character/${id}`)
    .then(({data})=>{
        const {name,image,gender,species,status,origin}  = data; 
        res
            .writeHead(200, {"Content-type": "application/json"})
            .end(JSON.stringify({name,image,gender,species,status,origin}))
    })
    .catch((error)=>{
        res.writeHead(500, {"Content-type":"text/plain"})
        res.end(error.message)
    })

}

module.exports = getCharById;