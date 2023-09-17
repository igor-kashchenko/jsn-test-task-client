import { API_Endpoints } from "@/types/API_Endpoints";
import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const addImages = async (imageUrls: string[], id: number) => {
  try {
    await axios.post(
      base_url + API_Endpoints.SUPERHEROES + '/' + String(id) + '/' + API_Endpoints.ADDIMAGES, 
      { urls: imageUrls }
    );

  } catch (error) {
    console.log(error);
  }
}