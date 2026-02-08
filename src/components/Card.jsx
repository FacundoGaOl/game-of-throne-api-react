const Card = ({character}) => {
    return (
        <div className="flex flex-col items-center border-1 border-white rounded-lg p-4 bg-zinc-900">
            <div className="w-full overflow-hidden rounded-md">
                <img className="w-full aspect-[3/4] object-cover" src={character.imageUrl} alt={`Retrato de ${character.firstName}`}/>
            </div>
            <div className="flex justify-between p-1 pt-4">
                <div>
                    <h2 className="text-lg text-white font-bold uppercase">
                        {character.fullName}
                    </h2>
                    <h3 className="text-[13px] text-white font-semibold bg-stone-800 border-1 border-gray-600 inline-block px-2 py-0 rounded-xl">
                        {character.family}
                    </h3>
                    <h4 className="text-sm text-yellow-400 italic font-semibold pt-1">
                        {character.title}
                    </h4>
                </div>
                <div className="max-w-4/10 mt-2">
                    <img className="" src="src/assets/images/houseStark.png" alt="" />
                </div>
            </div>
        </div>
    );
};
export default Card;