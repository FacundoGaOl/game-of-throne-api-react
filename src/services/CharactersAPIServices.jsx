import {useEffect, useState} from "react";
import axios from "axios";

const API_URL = "https://thronesapi.com/api/v2/Characters";

export const getAllCharacters = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};