import { API_Endpoints } from "@/types/API_Endpoints";
import axios from "axios";

const base_url = import.meta.env.VITE_API_BASE_URL;

export const sendImageToServer = async (files: File[]) => {
  const formData = new FormData();

  files.forEach(file => {
    formData.append('file', file)
  })

  try {
    const response = await axios.post(base_url + API_Endpoints.UPLOADIMAGES, formData)

    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
}