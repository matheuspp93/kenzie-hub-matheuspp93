import * as yup from "yup";

export const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valído")
    .required("Deve ser um email valído"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Senha é obrigatório"),
});
