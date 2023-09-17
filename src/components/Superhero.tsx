import React from "react";
import { SuperHero } from "../types/SuperHero";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";

type Props = {
  superhero: SuperHero;
};

export const Superhero: React.FC<Props> = ({ superhero }) => {
  const parsedImages = superhero.images && superhero.images[0] && superhero.images[0].image_URLS
    ? superhero.images[0].image_URLS.map((imageData) => JSON.parse(imageData))
    : [];

  return (
    <Grid
      item
      xs={3}
      component={Link}
      to={`superheroes/${superhero.id}`}
      sx={{
        textDecoration: "none",
        transition: "transform linear 0.2s",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Paper elevation={5} sx={{ p: 2 }}>

        <Box
          component={"img"}
          src={(parsedImages[0] && parsedImages[0].url) || 'https://placehold.co/400x400'}
          alt={`${superhero.nickname}'s image`}
          width={"100%"}
          height={400}
        />

        <Typography variant="h3" textAlign={"center"}>
          {superhero.nickname}
        </Typography>
      </Paper>
    </Grid>
  );
};
