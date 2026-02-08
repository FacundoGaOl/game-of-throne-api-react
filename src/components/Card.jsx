const Card = ({character}) => {
    return (
    <section className="max-w-[1200px]">
        <div className="flex flex-col items-center">
            <img className="w-full h-auto blockaspect-[3/4] object-cover mb-2.5 rounded-md" src={character.imageUrl} alt={`Retrato de ${character.firstName}`}/>
            <div className="flex justify-between">
                <div className="text-center">
                    <h2 className="text-center text-white text-bold">
                        {character.fullName}
                    </h2>
                    <h3 className="text-gray-400">
                        {character.family}
                    </h3>
                    <h4 className="text-yellow-200">
                        {character.title}
                    </h4>
                </div>
                <div className="max-w-3/10">
                    <img className="" src="src/assets/images/houseStark.png" alt="" />
                </div>
            </div>
        </div>
    </section>
    );
};
export default Card;