const Card = ({character}) => {
    return (
        <h2 className="text-center text-white text-bold">
            {character.fullName}
        </h2>
    );
};
export default Card;