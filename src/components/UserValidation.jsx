import * as yup from "yup";

export const userSchema = yup.object().shape({
  name: yup.string().min(5).max(15).required(),
  tel: yup.number(),
  email: yup.string().email().required(),
  message: yup.string(),
});
