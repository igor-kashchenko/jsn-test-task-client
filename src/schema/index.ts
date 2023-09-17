import * as yup from "yup";

export const schema = yup
.object({
  nickname: yup.string().min(3).max(20).required(),
  real_name: yup.string().min(3).max(20).required(),
  origin_description: yup.string().min(5).max(500).required(),
  superpowers: yup
    .array()
    .of(
      yup
        .string()
        .min(3, "Superpower is should be at least 3 characters long")
        .max(200)
    )
    .max(5, "Max powers limit reached: 5")
    .test(
      "at-least-one-superpower",
      "Please provide at least one superpower",
      (value) => {
        return value && value.length > 0;
      }
    ),
  catch_phrase: yup.string().min(3).max(100).required(),
  images: yup.array().max(5, "Max file limit reached"),
})
.required();
