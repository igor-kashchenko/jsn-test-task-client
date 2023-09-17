import { API_Endpoints } from "@/types/API_Endpoints";
import { SuperHero } from "@/types/SuperHero";
import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const editHero = async (id: number, editedProps: Partial<SuperHero>) => {
  try {
    await axios.put(base_url + API_Endpoints.SUPERHEROES + '/' + String(id), editedProps)
  } catch (error) {
    console.log(error);
  }
}