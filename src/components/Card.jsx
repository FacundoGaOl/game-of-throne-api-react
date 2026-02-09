const familyCorrections = {
    lanister: "lannister",
    targaryan: "targaryen",
};

const normalizeFamily = (family = "") => {
    let normalized = family
        .toLowerCase()
        .replace("house ", "")
        .trim();
    if (familyCorrections[normalized]) {
        normalized = familyCorrections[normalized];
    }
    return normalized;
}

const houseSigils = {
    stark: "/images/houseStark.png",
    lannister: "/images/lannisterSigil.png",
    targaryen: "/images/targaryenSigil.png",
    baratheon: "images/baratheonSigil.png",
    tyrell: "/images/houseTyrellSigil.png",
    mormont: "/images/houseMormontSigil.png",
    bolton: "/images/houseBoltonSigil.png",
    greyjoy: "/images/greyjoySigil.png"
};

const Card = ({character}) => {
    const familyKey = normalizeFamily(character.family);

    const borderClasses = {
        stark: "border-stark",
        lannister: "border-lannister",
        targaryen: "border-targaryen",
        baratheon: "border-baratheon",
        greyjoy: "border-greyjoy",
        default: "border-gray-600" 
    };

    const borderColor = borderClasses[familyKey] || borderClasses.default;

    return (
        <div className={`flex flex-col items-center border-2 ${borderColor} rounded-lg p-4 bg-zinc-900`}>
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
                <div className="max-w-4/10 mt-2 ">
                    <img className="object-contain" src={houseSigils[familyKey] || "/assets/images/defaultSigil.png"} alt="" />
                </div>
            </div>
        </div>
    );
};
export default Card;