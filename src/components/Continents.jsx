import { useEffect, useState } from 'react';
import {getAllContinents} from "../services/CharactersAPIServices"; 

const Continents = () => { 
    const [continents, setContinents] = useState([]);

    const positions = {
        'Westeros': "top-[15%] left-[28%]",
        'Essos': "top-[22%] left-[72%]",
        'Sothoryos': "top-[78%] left-[58%]",
        'Ulthos': "top-[62%] left-[48%]",
    };

    const fetchContinents = async () => {
        try { const data = await getAllContinents();
            if (data) { setContinents(data); } 
        } catch (error) { console.error("Error cargando personajes:", error); 
        } 
    }; useEffect(() => { 
    fetchContinents(); }, [] );

    return (
        <div className="flex flex-col items-center bg-black p-8 font-cinzel">
            <div className="text-center mb-6">
                <h2 className="text-2xl text-[#e6c300] tracking-[0.2em] font-bold uppercase border-b border-[#e6c300]/30 pb-2">
                    Map of the Known World
                </h2>
            </div>

            <div className="relative w-full max-w-[1000px] border-2 border-[#e6c300]/50 rounded-sm shadow-[0_0_20px_rgba(230,195,0,0.2)] overflow-hidden">
                <img 
                src="/images/gameOfThronesMap.png" 
                alt="Mapa de Poniente y Essos" 
                className="w-full h-auto block grayscale-[20%] sepia-[10%]"
                />
                {continents.map((continent) => (
                    <div key={continent.id}
                        className={`absolute ${positions[continent.name]}`}
                    >
                        <div className="bg-black/60 backdrop-blur-sm border border-[#e6c300]/60 px-4 py-2 rounded-sm shadow-xl transition-all hover:scale-110 hover:bg-black/80 cursor-default group">
                            <span className="text-white text-sm md:text-lg font-bold tracking-widest uppercase group-hover:text-[#e6c300]">
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