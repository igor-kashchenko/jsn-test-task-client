import React, { ChangeEvent, useState } from "react";
import { SuperHero } from "@/types/SuperHero";
import { deleteHero } from "@/utils/deleteHero";
import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { MuiChipsInput } from "mui-chips-input";
import CircularProgress from "@mui/material/CircularProgress";

type Props = {
  superhero: SuperHero;
  parsedImages: { url: string; fileId: string }[];
  onEditHero: (editedValues: Partial<SuperHero>) => void;
};

export const HeroProfile: React.FC<Props> = ({
  superhero,
  onEditHero,
  parsedImages,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [editedValues, setEditedValues] = useState({
    nickname: superhero.nickname,
    real_name: superhero.real_name,
    origin_description: superhero.origin_description,
    catch_phrase: superhero.catch_phrase,
    superpowers: superhero.superpowers || [],
  });

  const [isLoading, setIsLoading] = useState(false);

  const [chipError, setChipError] = useState(false);

  const navigate = useNavigate();

  const handleDeleteHero = async () => {
    setIsLoading(true);

    try {
      if (superhero.id) {
        await deleteHero(superhero.id);

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    setEditMode((prev) => !prev);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedValues({
      ...editedValues,
      [name]: value,
    });
  };

  const handleChipInputChange = (superpowers: string[]) => {
    if (superpowers.length <= 5) {
      setChipError(false);

      setEditedValues({
        ...editedValues,
        superpowers: superpowers,
      });

      return;
    }

    setChipError(true);
  };

  const handleEditHero = async () => {
    if (superhero.id) {
      onEditHero(editedValues);
      setEditMode(false);
    }
  };

  return (
    <Paper elevation={5} sx={{ mt: 2, p: 2 }}>
      {parsedImages.length === 0 && (
        <Box
          component={"img"}
          src="https://placehold.co/400x400"
          alt="no image provided"
        />
      )}

      {parsedImages.map((img) => (
        <Box
          component={"img"}
          src={img.url}
          alt={superhero.nickname}
          width={200}
          height={300}
          key={img.url}
          mr={2}
          sx={{
            "&:last-of-type": {
              mr: 0,
            },
          }}
        />
      ))}

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        {editMode ? (
          <TextField
            name="nickname"
            label="nickname"
            value={editedValues.nickname}
            onChange={handleInputChange}
            sx={{ my: 2 }}
          />
        ) : (
          <Typography variant="h2" mb={1}>
            {superhero.nickname}
          </Typography>
        )}

        <Box display={"flex"} alignItems={"center"}>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: "25%", mr: 2 }}
            onClick={handleEditClick}
          >
            Edit Hero
          </Button>

          {isLoading ? (
            <CircularProgress size={24} />
          ) : (
            <Button
              variant="contained"
              color="error"
              sx={{ height: "25%" }}
              onClick={handleDeleteHero}
            >
              Delete hero
            </Button>
          )}
        </Box>
      </Box>

      {editMode ? (
        <TextField
          name="catch_phrase"
          label="catch phrase"
          value={editedValues.catch_phrase}
          onChange={handleInputChange}
          sx={{ display: "block", mb: 2 }}
        />
      ) : (
        <Typography
          variant="body1"
          fontStyle={"italic"}
          mb={2}
        >{`"${superhero.catch_phrase}"`}</Typography>
      )}

      {editMode ? (
        <TextField
          name="real_name"
          label="real name"
          value={editedValues.real_name}
          onChange={handleInputChange}
          sx={{ display: "block", mb: 2 }}
        />
      ) : (
        <Typography variant="h3" mb={2}>
          {superhero.real_name}
        </Typography>
      )}
      {editMode ? (
        <TextField
          name="origin_description"
          label="origin"
          multiline
          value={editedValues.origin_description}
          onChange={handleInputChange}
          fullWidth
          sx={{ display: "block", mb: 2 }}
        />
      ) : (
        <Typography variant="body1" mb={2}>
          {superhero.origin_description}
        </Typography>
      )}

      {editMode ? (
        <MuiChipsInput
          label="superpowers"
          name="superpowers"
          value={editedValues.superpowers as string[]}
          onChange={handleChipInputChange}
          error={chipError}
          helperText={chipError ? "Superpowers limit reached" : ""}
        />
      ) : (
        superhero.superpowers?.map((superpower) => (
          <Chip
            key={superpower}
            label={superpower}
            sx={{
              mr: 1,
              "&:last-of-type": {
                mr: 0,
              },
            }}
          />
        ))
      )}

      {editMode && (
        <Button
          variant="outlined"
          color="primary"
          sx={{ display: "block", mt: 2 }}
          onClick={handleEditHero}
        >
          Save
        </Button>
      )}
    </Paper>
  );
};
