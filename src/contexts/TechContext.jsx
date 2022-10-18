import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { listarTech } from "../constants/endpoints";
import { api } from "../services/api";
import { AuthContext } from "./AuthContext";

export const TechContext = createContext({});

const TechProvaider = ({ children }) => {
  const { loadUser, user } = useContext(AuthContext);
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [tech, setTech] = useState([]);

  const onSubmit = async (data) => {
    try {
      await api.post(listarTech, data);
      loadUser();
      toast.success("Tech criada com sucesso!");
      setModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado");
    }
  };
  const deleteTech = async (techId) => {
    try {
      await api.delete(`users/techs/${techId}`);
      loadUser();
      toast.success("Tech deletada com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  const onClickEdit = (techId) => {
    const tech = user.techs.find((element) => element.id === techId);
    setTech(tech);
    setModalEdit(true);
  };

  const submitEdit = async (data) => {
    try {
      await api.put(`users/techs/${tech.id}`, data);
      loadUser();
      setModalEdit(false);
      toast.success("Tech editada com sucesso");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        modal,
        setModal,
        onSubmit,
        deleteTech,
        onClickEdit,
        setModalEdit,
        submitEdit,
        modalEdit,
        tech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvaider;
