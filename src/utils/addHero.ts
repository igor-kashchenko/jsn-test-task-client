import { API_Endpoints } from "@/types/API_Endpoints";
import { InputData } from "@/types/InputData";
import { SuperHero } from "@/types/SuperHero";
import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const addHero = async (superHero: InputData): Promise<SuperHero> => {
  try {
    const response = await axios.post(
      base_url + API_Endpoints.SUPERHEROES,
      superHero
    );

    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
