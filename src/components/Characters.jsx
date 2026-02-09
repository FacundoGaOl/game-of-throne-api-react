import {useEffect, useState} from "react";
import getAllCharacters from "../services/CharactersAPIServices";
import Card from "./Card";


const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const hiddenID = 7;

    const filterData = (data) => {
        return data.filter(character => character.id !== hiddenID)
    }

    const fetchCharacters = async () => {
        try {
            const data = await getAllCharacters(); 
            
            if (data) {
                const displayData = filterData(data);
                setCharacters(displayData);
            }
        } catch (error) {
            console.error("Error cargando personajes:", error);
        }
    };

    useEffect(() => {
        fetchCharacters();
    }, [] );

    return (
        <>
            <section className="max-w-[1200px] w-full mx-auto px-2">
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