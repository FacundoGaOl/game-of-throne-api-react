import {useEffect, useState} from "react";
import {getAllCharacters} from "../services/CharactersAPIServices";
import Line from "./Line";

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
                <Line key={character.id} character={character}/>
                ))}
            </ul>
        </>
    )
}
export default Characters;


/* Codigo de los apuntes de ANA
import { useEffect, useState } from "react";
import BookCard from "../components/BookCard";
//importamos el componente
import { getAllBooks } from "../services/BookServices";

const Libros = () => {
const [books, setBooks] = useState([]);

//Reemplazamos esta parte del código. Ahora el componente ya no usa fetch directamente, utiliza getAllBooks()
const fetchBooks = async () => {
    const data = await getAllBooks();
    setBooks(data);
    };

    useEffect(() => {
        fetchBooks();
        }, []);

    return (
        <>
            <h1 className="text-3xl font-bold text-center mt-10">
                Libros 📚
            </h1>

            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-10">
                {books.map(book => (
                <BookCard key={book.id} book={book} />
                ))}
            </ul>
        </>
    );
}

export default Libros;
*/