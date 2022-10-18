import * as yup from "yup";

export const ModalSchema = yup.object().shape({
  title: yup.string().required("Campo  é obrigatório"),

  status: yup.string().required("Campo  é obrigatório"),
});
