const Card = ({ character }) => {
  return (
    /* Añadimos 'group' para controlar los hijos en el hover y una transición de altura */
    <div className="group flex flex-col border-2 border-white rounded-lg p-4 bg-black w-full max-w-xs transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-white/20">
      
      {/* 1. Control de la imagen: Usamos aspect-ratio y group-hover para que crezca */}
      <div className="w-full overflow-hidden rounded-md transition-all duration-500">
        <img 
          className="w-full aspect-[3/4] object-cover transition-transform duration-500 group-hover:scale-110" 
          src={character.imageUrl} 
          alt={character.fullName}
        />
      </div>

    <div className="mt-4 flex flex-col items-start w-full">
        <div className="flex justify-between items-start w-full gap-2">
          {/* 2. Gestión de líneas: truncamos el texto con 'line-clamp' */}
          <h2 className="text-lg text-white font-bold uppercase leading-tight line-clamp-1 group-hover:line-clamp-none">
            {character.fullName}
          </h2>

        <h3 className="text-[10px] text-white font-semibold bg-stone-800 border border-gray-600 px-3 py-0.5 rounded-full mt-2">
          {character.family}
        </h3>

        {/* 3. El Título se muestra completo solo al hacer hover */}
        <h4 className="text-sm text-yellow-400 italic font-bold mt-2 line-clamp-1 group-hover:line-clamp-none transition-all">
          {character.title}
        </h4>
        </div>
        <div className="shrink-0 w-10 group-hover:w-12 transition-all">
            <img src="src/assets/images/houseStark.png" alt="Badge" className="w-full h-auto opacity-80" />
          </div>
        </div>
    </div>
  );
};

export default Card;