import React, {useState, useEffect} from "react";
import axios from "axios"
import CharacterCard from "./CharacterCard"



function CharacterGrid(){

    const [characters, setCharacters] = useState([]);
    
    
    
    useEffect(() => {
        axios
        .get(`https://swapi.co/api/people/`)
            .then(response =>{
            console.log(response.data.results)
            setCharacters(response.data.results)
    
    })

    .catch(error =>{
        console.log("WRONG", error)
    })
    
    },[])
    
    return(
        <div className="container">
            {characters.map((character, index) => (
                <CharacterCard
                    key={index}
                    name={character.name}
                    height={character.height}
                    gender={character.gender}
                />
    ))}
    </div>

    )
    }

export default CharacterGrid;