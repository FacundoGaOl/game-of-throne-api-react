const Card = ({character}) => {
    return (
        <div className="flex flex-col items-center">
            <div>
                <img src={character.imageUrl} alt={`Retrato de ${character.firstName}`}/>
            </div>
            <div>
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
                <div>

                </div>
            </div>
        </div>
    );
};
export default Card;