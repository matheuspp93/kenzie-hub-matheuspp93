import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TechContext } from "../../contexts/TechContext";
import * as S from "./style.modalEdit";

const ModalEdit = () => {
  const { deleteTech, setModalEdit, submitEdit, tech } =
    useContext(TechContext);

  const { register, handleSubmit } = useForm();

  return (
    <S.ContainerTech>
      <S.ModalDiv>
        <div>
          <h2>Detalhes da Tecnologia</h2>
          <button onClick={() => setModalEdit(false)}>X</button>
        </div>
        <form onSubmit={handleSubmit(submitEdit)}>
          <label htmlFor="">Nome da Tecnologia</label>
          <input type="text" placeholder={tech.title} />
          <label htmlFor="">Selecione o nível</label>
          <select {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div>
            <S.EditTech type="submit">Salvar aletrações</S.EditTech>
            <S.EcluirTech onClick={() => deleteTech(tech.id)}>
              Excluir
            </S.EcluirTech>
          </div>
        </form>
      </S.ModalDiv>
    </S.ContainerTech>
  );
};

export default ModalEdit;
