import { Image } from "./Image";

export interface SuperHero {
  id?: number;
  nickname: string;
  real_name: string;
  origin_description: string;
  superpowers: (string | undefined)[] | undefined;
  catch_phrase: string;
  createdAt?: string; 
  updatedAt?: string; 
  images?: Image[];
}