import Button from "../Button/style.button";
import StyledInput from "../Input/style.input";
import * as S from "./style.formRegister";
import { useForm } from "react-hook-form";
import logo from "../../assets/img/Logo.svg";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { api } from "../../services/api";
import { registro } from "../../constants/endpoints";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("Nome é obrigatorio"),
  email: yup
    .string()
    .email("Deve ser um email valído")
    .required("Deve ser um email valído"),
  password: yup
    .string()
    .min(8, "No minimo 8 caracteres")
    .required("Senha é obrigatório"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Confirmação de senha obrigatório"),
  bio: yup.string().required("Campo obrigatório"),
  contact: yup.string().required("Campo obrigatório"),
  course_module: yup.string().required("Campo obrigatório"),
});

const FormRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const singIn = async (data) => {
    console.log(data);
    await api
      .post(registro, data)
      .then((res) => {
        navigate("/login");
        toast.success("Cadastro concluido com sucesso faça seu login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <S.Header>
        <img src={logo} alt="" />
        <S.LinkStyled to="/login">Voltar</S.LinkStyled>
      </S.Header>
      <S.Form onSubmit={handleSubmit(singIn)}>
        <h2>Crie sua conta</h2>
        <span>Rapído e grátis, vamos nessa</span>
        <label htmlFor="name">Nome</label>
        <StyledInput
          id="name"
          type="text"
          font="secondary"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <small>{errors.name?.message}</small>
        <label htmlFor="email">Email</label>
        <StyledInput
          id="email"
          type="email"
          font="secondary"
          placeholder="Digite seu email"
          {...register("email")}
        />
        <small>{errors.email?.message}</small>
        <label htmlFor="password">Senha</label>
        <StyledInput
          id="passwoard"
          type="password"
          font="secondary"
          placeholder="Digite sua senha"
          {...register("password")}
        />
        <small>{errors.password?.message}</small>
        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <StyledInput
          id="confirmPassword"
          type="password"
          font="secondary"
          placeholder="Confirmar senha"
          {...register("confirmPassword")}
        />
        <small>{errors.confirmPassword?.message}</small>
        <label htmlFor="biography">Bio</label>
        <StyledInput
          id="biography"
          type="text"
          font="secondary"
          placeholder="Fale sobre você"
          {...register("bio")}
        />
        <small>{errors.bio?.message}</small>
        <label htmlFor="contact">Contato</label>
        <StyledInput
          id="contact"
          type="number"
          font="secondary"
          placeholder="Digete seu contato"
          {...register("contact")}
        />
        <small>{errors.contact?.message}</small>

        <select {...register("course_module")}>
          <option value="">Selecione o módulo</option>
          <option value="1°módulo">1°módulo</option>
          <option value="2°módulo">2°módulo</option>
          <option value="3°módulo">3°módulo</option>
        </select>
        <Button font="tertiary" type="submit">
          Cadastrar
        </Button>
      </S.Form>
    </>
  );
};

export default FormRegister;
