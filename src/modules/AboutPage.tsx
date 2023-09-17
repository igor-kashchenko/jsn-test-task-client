import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { NavigateHomeBtn } from '@/components/NavigateHomeBtn';
import { fetchHero } from '@/utils/fetchHero';
import { HeroProfile } from '@/components/HeroProfile';
import { SuperHero } from '@/types/SuperHero';
import { editHero } from '@/utils/editHero';

export const AboutPage: React.FC = () => {
  const { id } = useParams();
  const [superhero, setSuperhero] = useState<SuperHero | null>(null)
  const [parsedImages, setParsedImages] = useState<{ url: string; fileId: string }[]>([]);

  useEffect(() => {
    if (
      superhero?.images &&
      superhero.images[0] &&
      superhero.images[0].image_URLS
    ) {

      const parsedImagesData = superhero.images[0].image_URLS.map((imageData) =>
        JSON.parse(imageData)
      );

      setParsedImages(parsedImagesData);
    }
  }, [superhero]);

  useEffect(() => {
    const getSuperhero = async () => {
      try {
        if (id) {
          const response = await fetchHero(id);

          setSuperhero(response);
        }
      } catch (error) {
      console.log(error);
    }
    }

    getSuperhero();
  }, [id]);

  const editHeroOptimistically = async (editedValues: Partial<SuperHero>) => {
    setSuperhero((prevSuperhero) => {
      if (prevSuperhero) {
        return {
          ...prevSuperhero,
          ...editedValues,
        };
      }
      return null;
    });

    if (superhero?.id) {
      try {
        await editHero(superhero.id, editedValues);
      } catch (error) {
        console.error("Failed to update hero:", error);
        setSuperhero((prev) => prev);
      }
    }
  };

  return (
    <>
      <NavigateHomeBtn />

      {superhero && <HeroProfile superhero={superhero} parsedImages={parsedImages} onEditHero={editHeroOptimistically} />}
    </>
  )
}
