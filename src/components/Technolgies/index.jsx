import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { ModalAdd } from "../ModalAdd";
import * as S from "./style.technologies";

const Tecnlogies = () => {
  const { modal, setModal, techs, deleteTechs } = useContext(TechContext);

  return (
    <>
      <S.TechContainer>
        <S.TechTitle>
          <h2>Tecnologias</h2>
          <button onClick={() => setModal(true)}>+</button>
        </S.TechTitle>
        <ul>
          {techs.map((element) => {
            return (
              <li>
                <h3>{element.title}</h3>
                <div>
                  <span>{element.status}</span>
                  <button onClick={() => deleteTechs(element.id)}>
                    delete
                  </button>
                  <button>edit</button>
                </div>
              </li>
            );
          })}
        </ul>
      </S.TechContainer>
      {modal && <ModalAdd />}
    </>
  );
};
export default Tecnlogies;
