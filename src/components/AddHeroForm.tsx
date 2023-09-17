import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/schema";
import { InputData } from "@/types/InputData";
import { sendImageToServer } from "@/utils/sendImageToServer";
import { addHero } from "@/utils/addHero";
import { addImages } from "@/utils/addImages";

import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { MuiChipsInput } from "mui-chips-input";
import { MuiFileInput } from "mui-file-input";
import CircularProgress from "@mui/material/CircularProgress";

export const AddHeroForm: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const isFormValid = Object.keys(errors).length !== 0;

  const onSubmit = async (data: InputData) => {
    setIsLoading(true);

    try {
      const superhero = { ...data };
      delete superhero.images;

      const response = await addHero(superhero);
      const userId = response.id;

      if (data.images && data.images?.length > 0) {
        const image_URLS = await sendImageToServer(data.images);

        await addImages(image_URLS, userId as number);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }

    reset();
    navigate("/");
  };

  return (
    <>
      <Typography variant="h2" textAlign={"center"} mb={2}>
        Add superhero
      </Typography>

      <Paper
        component={"form"}
        onSubmit={handleSubmit(onSubmit)}
        elevation={5}
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          justifyContent: "center",
          m: "0 auto",
          p: 2,
        }}
      >
        <Controller
          name="nickname"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="nickname"
              sx={{ mb: 2 }}
              {...field}
              error={!!errors.nickname}
              helperText={errors.nickname?.message}
            />
          )}
        />

        <Controller
          name="real_name"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="real name"
              sx={{ mb: 2 }}
              {...field}
              error={!!errors.real_name}
              helperText={errors.real_name?.message}
            />
          )}
        />

        <Controller
          name="superpowers"
          control={control}
          render={({ field }) => (
            <MuiChipsInput
              {...field}
              value={field.value as string[]}
              label="superpowers"
              sx={{ mb: 2 }}
              error={!!errors.superpowers}
              helperText={
                errors.superpowers?.message ||
                (Array.isArray(errors.superpowers) &&
                  errors.superpowers.map((error) => error?.message).join(" "))
              }
            />
          )}
        />

        <Controller
          name="origin_description"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="origin"
              multiline
              sx={{ mb: 2 }}
              {...field}
              error={!!errors.origin_description}
              helperText={errors.origin_description?.message}
            />
          )}
        />

        <Controller
          name="catch_phrase"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              label="catch phrase"
              sx={{ mb: 2 }}
              {...field}
              error={!!errors.catch_phrase}
              helperText={errors.catch_phrase?.message}
            />
          )}
        />

        <Controller
          name="images"
          control={control}
          render={({ field }) => (
            <MuiFileInput
              multiple
              {...field}
              label="add images"
              sx={{ mb: 2 }}
              inputProps={{ accept: ".png, .jpeg, .jpg, .webp" }}
              error={!!errors.images}
              helperText={errors.images?.message}
            />
          )}
        />

        {isLoading ? (
          <CircularProgress size={24} />
        ) : (
          <Button
            type="submit"
            variant="outlined"
            sx={{ width: "25%", position: "relative" }}
            disabled={isFormValid || isLoading}
          >
            Add superhero
          </Button>
        )}
      </Paper>
    </>
  );
};
