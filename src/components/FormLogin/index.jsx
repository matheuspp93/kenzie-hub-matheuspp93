import * as S from "./style.formLogin";
import StyledInput from "../Input/style.input";
import Button from "../Button/style.button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { schema } from "../../validations/loginUser";

const FormLogin = () => {
  const { loginUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
