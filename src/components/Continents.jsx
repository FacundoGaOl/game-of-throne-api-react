import { useEffect, useState } from 'react';
import {getAllContinents} from "../services/CharactersAPIServices"; 

const Continents = () => { 
    const [continents, setContinents] = useState([]);

    const positions = {
        'Westeros': "top-[15%] left-[30%]",
        'Essos': "top-[20%] left-[70%]",
        'Sothoryos': "top-[80%] left-[60%]",
        'Ulthos': "top-[60%] left-[50%]",
    };

    const fetchContinents = async () => {
        try { const data = await getAllContinents();
            if (data) { setContinents(data); } 
        } catch (error) { console.error("Error cargando personajes:", error); 
        } 
    }; useEffect(() => { 
    fetchContinents(); }, [] );

    return (
        <div className="flex flex-col items-center bg-black p-16 font-cinzel">

            <div className="relative w-full max-w-[1000px] border-2 border-yellow-400/50 rounded-sm shadow-[0_0_20px_rgba(230,195,0,0.2)] overflow-hidden">
                <img 
                src="/images/gameOfThronesMap.png" 
                alt="Mapa de Poniente y Essos" 
                className="w-full h-auto block"
                />
                {continents.map((continent) => (
                    <div key={continent.id}
                        className={`absolute ${positions[continent.name]}`}
                    >
                        <div className="bg-black/60 border border-yellow-400 px-4 py-2 rounded-sm shadow-xl transition-all">
                            <span className="text-white text-sm md:text-lg font-bold  uppercase">
                                {continent.name}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
} 

export default Continents;