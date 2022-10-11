import * as S from "./style.formLogin";
import StyledInput from "../Input/style.input";
import Button from "../Button/style.button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { login } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
  email: yup
    .string()
    .email("Deve ser um email valído")
    .required("Deve ser um email valído"),
});

const FormLogin = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const loginUser = async (data) => {
    await api
      .post(login, data)
      .then((resp) => {
        localStorage.setItem("@KenzieHub:token", resp.data.token);
        localStorage.setItem("@KenzieHub:id", resp.data.user.id);
        localStorage.setItem("@kenzieHub:user", resp.data.user.name);
        localStorage.setItem("@kenzieHub:curso", resp.data.user.course_module);
        navigate("/Dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <S.Form onSubmit={handleSubmit(loginUser)}>
      <h2>Login</h2>
      <label>Email</label>
      <StyledInput
        type="email"
        font="primary"
        placeholder="Digite seu email"
        {...register("email")}
      />
      <small>{errors.email?.message}</small>
      <label>Senha</label>
      <StyledInput
        type="password"
        font="primary"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      <small>{errors.password?.message}</small>
      <Button font="primary">Entrar</Button>
      <p>Ainda não possui uma conta ?</p>
      <S.Linkb to="/register">Cadastrar</S.Linkb>
    </S.Form>
  );
};

export default FormLogin;
