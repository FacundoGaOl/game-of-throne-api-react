import axios from "axios";

const charactersUrl = "https://thronesapi.com/api/v2/Characters";
const continentsUrl = "https://thronesapi.com/api/v2/Continents";

export const getAllCharacters = async () => { 
    const response = await axios.get(charactersUrl);
    return response.data; 
}; 

export const getAllContinents = async () => {
    const response = await axios.get(continentsUrl);
    return response.data; 
};