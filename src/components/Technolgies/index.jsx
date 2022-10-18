import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { TechContext } from "../../contexts/TechContext";
import { ModalAdd } from "../ModalAdd";
import ModalEdit from "../ModalEdit";
import * as S from "./style.technologies";

const Tecnlogies = () => {
  const { modal, setModal, onClickEdit, modalEdit } = useContext(TechContext);
  const { user } = useContext(AuthContext);

  return (
    <>
      <S.TechContainer>
        <S.TechTitle>
          <h2>Tecnologias</h2>
          <button onClick={() => setModal(true)}>+</button>
        </S.TechTitle>
        {user.techs.length > 0 ? (
          <ul>
            {user.techs.map((element) => {
              return (
                <li onClick={() => onClickEdit(element.id)} key={element.id}>
                  <h3>{element.title}</h3>

                  <span>{element.status}</span>
                </li>
              );
            })}
          </ul>
        ) : (
          <S.TilteMensagem>Ainda não a tecnologia cadastrada</S.TilteMensagem>
        )}
      </S.TechContainer>
      {modal && <ModalAdd />}
      {modalEdit && <ModalEdit />}
    </>
  );
};
export default Tecnlogies;
