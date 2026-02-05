import axios from "axios";

const API_URL = "https://thronesapi.com/api/v2/Characters";

export const getAllCharacters = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

/* Cual es la diferencia?
import { useEffect, useState } from "react";
import axios from "axios";

function Personajes() {
    const [personajes, setPersonajes] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function obtenerPersonajes() {
            try { // 1️⃣Intentamos pedir datos a Internet
                const respuesta = await axios.get(
                "https://rickandmortyapi.com/api/character"
            );
            // 2️⃣Si todo sale bien, guardamos los datos
            setPersonajes(respuesta.data.results);
            } catch (err) { // 3️⃣Si falla, mostramos un mensaje
                setError("No se pudieron cargar los personajes 😢");
            } finally {
            // 4️⃣Esto se ejecuta SIEMPRE
            setCargando(false);
            }
        }
        obtenerPersonajes();
    }, []);
            // 🖥️ Estados de la pantalla
    if (cargando) {
    return <p>Cargando personajes...</p>;
    }
    if (error) {
        return <p>{error}</p>;
    }
    return (
        <div>
            <h2>Personajes de Rick & Morty</h2>
            <ul>
                {personajes.map((personaje) => (
                    <li key={personaje.id}>
                        {personaje.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Personajes; 
*/