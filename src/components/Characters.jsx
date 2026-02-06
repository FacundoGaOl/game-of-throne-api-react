import {useEffect, useState} from "react";
import {getAllCharacters} from "../services/CharactersAPIServices";
import Card from "./Card";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const fetchCharacters = async() => {
        const data = await getAllCharacters();
        setCharacters(data);
    };

    useEffect(() => {
        fetchCharacters();
    }, [] );

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">
                Personajes
            </h1>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-10">
                {characters.map(character => (
                <Card key={character.id} character={character}/>
                ))}
            </ul>
        </>
    )
}

export default Characters;