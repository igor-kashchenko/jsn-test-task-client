import axios from "axios";
import { API_Endpoints } from "@/types/API_Endpoints";
import { SuperHero } from "@/types/SuperHero";

const base_url = import.meta.env.VITE_API_BASE_URL;

interface SuperHeroResponse {
  superheroes: SuperHero[];
  totalPages: number;
}

export const fetchAllHeroes = async (page: number, pageSize: number): Promise<SuperHeroResponse> => {
  try {
    const response = await axios.get(base_url + API_Endpoints.SUPERHEROES, {
      params: {
        page,
        pageSize,
      }
    })
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}