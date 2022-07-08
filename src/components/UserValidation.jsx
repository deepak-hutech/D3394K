import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(3).max(15).required(),
  requests: yup.string(),
  phone: yup.number(),
  email: yup.string().email().required(),
  message: yup.string(),
});
