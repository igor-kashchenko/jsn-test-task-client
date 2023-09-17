import { schema } from "@/schema";
import * as yup from "yup";

export type InputData = yup.InferType<typeof schema>