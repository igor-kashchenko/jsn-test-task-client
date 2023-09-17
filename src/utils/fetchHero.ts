import axios from "axios";
import { API_Endpoints } from "@/types/API_Endpoints";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const fetchHero = async (id: string) => {
  try {
    const response = await axios.get(base_url + API_Endpoints.SUPERHEROES + '/' + String(id))

    return response.data;
  } catch (error) {
    console.log(error);
  }
}