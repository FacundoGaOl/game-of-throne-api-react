const Footer = () => {
  return (
    <footer className="border-t-2 border-yellow-600 bg-stone-950 mt-12 pt-12 text-gray-400 font-sans">
      <section className="max-w-[1200px] mx-auto px-6">
        
        {/* Contenedor Superior: 4 Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 items-start">
          
          {/* Columna 1: Info Proyecto */}
          <div className="flex flex-col">
            <h2 className="font-cinzel font-bold text-yellow-600 tracking-widest mb-2 uppercase">
              Game Of Thrones
            </h2>
            <hr className="w-full border-t border-stone-700 mb-4"/>
            <p className="text-xs leading-relaxed uppercase">
              Proyecto académico desarrollado para el consumo de la 
              <a className="text-yellow-600 mx-1 border-b border-yellow-600/30" href="https://thronesapi.com/">Thrones API</a>.
              Visualización de personajes del universo creado por George R. R. Martin.
            </p>
          </div>

          {/* Columna 2: Casas de Poniente */}
          <div className="flex flex-col">
            <h2 className="font-cinzel font-bold text-yellow-600 tracking-widest mb-2 uppercase">
              Casas de Poniente
            </h2>
            <hr className="w-full border-t border-stone-700 mb-4"/>
            <ul className="text-xs space-y-2 uppercase">
              <li className="hover:text-yellow-600 transition-colors cursor-pointer">Casa Stark</li>
              <li className="hover:text-yellow-600 transition-colors cursor-pointer">Casa Lannister</li>
              <li className="hover:text-yellow-600 transition-colors cursor-pointer">Casa Targaryen</li>
              <li className="hover:text-yellow-600 transition-colors cursor-pointer">Casa Baratheon</li>
              <li className="hover:text-yellow-600 transition-colors cursor-pointer">Casa Tyrell</li>
              <li className="hover:text-yellow-600 transition-colors cursor-pointer">Casa Greyjoy</li>
            </ul>
          </div>

          {/* Columna 3: Detalles Equipo */}
          <div className="flex flex-col">
            <h2 className="font-cinzel font-bold text-yellow-600 tracking-widest mb-2 uppercase">
              Proyecto
            </h2>
            <hr className="w-full border-t border-stone-700 mb-4"/>
            <ul className="text-xs space-y-2 uppercase">
              <li>Equipo 3</li>
              <li>JM Factoria</li>
              <li>HTML · CSS · JavaScript</li>
              <li>Consumo de API REST</li>
            </ul>
          </div>

          {/* Columna 4: Reproductor Spotify (Simplificado) */}
          <div className="flex flex-col">
             {/* Línea decorativa superior que se ve en la imagen */}
            <hr className="w-1/2 border-t border-stone-700 mb-6 self-end"/>
            <div className="bg-red-700 rounded-lg p-3 flex items-center gap-3 shadow-lg">
                <div className="w-12 h-12 bg-black rounded shrink-0 overflow-hidden">
                    <img src="https://via.placeholder.com/50" alt="Cover" className="w-full h-full object-cover opacity-80" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] font-bold text-white truncate">Juego de Tronos (Tema Principal)</p>
                    <p className="text-[9px] text-red-200 truncate">Música cinematográfica</p>
                    <span className="text-[8px] bg-black/40 px-1 rounded text-white mt-1 inline-block">Muestra</span>
                </div>
                <div className="text-white text-xl">▶</div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;