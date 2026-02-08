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
            <section className="max-w-[1200px] w-full mx-auto px-2">
                <h1 className="text-3xl font-bold text-center mt-20 text-white">
                    Personajes
                </h1>
                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8 px-4">
                    {characters.map(character => (
                    <Card key={character.id} character={character}/>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Characters;