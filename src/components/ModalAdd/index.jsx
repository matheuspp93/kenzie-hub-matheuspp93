import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as S from "./style.addmodal";
import { ModalSchema } from "../../validations/modalSchema";

export const ModalAdd = () => {
  const { setModal, onSubmit } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ModalSchema),
  });

  return (
    <S.ModalContainer>
      <S.ModalDiv>
        <div>
          <h2>Cadastar Tecnologia</h2>
          <button onClick={() => setModal(false)}>X</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Nome</label>
          <input type="text" placeholder="Ex: HTML" {...register("title")} />
          <span>{errors.title?.message}</span>

          <label htmlFor="status">Selecione o status</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <span>{errors.status?.message}</span>
          <button type="submit">Cadastrar</button>
        </form>
      </S.ModalDiv>
    </S.ModalContainer>
  );
};
