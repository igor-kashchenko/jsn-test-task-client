import React from 'react';
import { SuperHero } from '@/types/SuperHero';
import Grid from '@mui/material/Grid';
import { Superhero } from './Superhero';

type Props = {
  superheroes: SuperHero[];
}

export const ListOfHeroes: React.FC<Props> = ({ superheroes }) => {
  return (
    <Grid container spacing={2}>
      {superheroes.map((superhero) => (
        <Superhero superhero={superhero} key={superhero.id}/>
      ))}
    </Grid>
  )
}
