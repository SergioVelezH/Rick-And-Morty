const axios = require("axios")
const URL = require("http://rickandmortyapi.com/api/character/")


export async function getCharById (req, res){
    try {
    const {id} = req.params;
    const {data} = await axios(URL + id);
        
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin?.name,
            image: data.image,
            status: data.status,
        };

        character.name
            ? res.status(200).json(character)
            : res.status(404).send("Not Found");
 } catch (error) {
        res.status(500).json({message: error.message})
        
    }

}

module.exports = getCharById;