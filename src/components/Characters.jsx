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
            <section className="max-w-[1200px] w-full mx-auto px-4">
                <h1 className="text-3xl font-bold text-center mt-20 text-white">
                    Personajes
                </h1>
                <ul className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8 px-10">
                    {characters.map(character => (
                    <Card key={character.id} character={character}/>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Characters;