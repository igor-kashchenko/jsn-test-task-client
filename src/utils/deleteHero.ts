import { API_Endpoints } from "@/types/API_Endpoints";
import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const deleteHero = async (id: number) => {
  try {
    await axios.delete(base_url + API_Endpoints.SUPERHEROES + '/' + String(id));
  } catch (error) {
    console.log(error);
  }
}