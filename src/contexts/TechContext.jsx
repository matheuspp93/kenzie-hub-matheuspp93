import { createContext, useState } from "react";
import { toast } from "react-toastify";
// import { listarTech } from "../constants/endpoints";
import { api } from "../services/api";

export const TechContext = createContext({});

const TechProvaider = ({ children }) => {
  const [modal, setModal] = useState(false);
  const [techs, setTechs] = useState([]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const resp = await api.post("users/techs", data);

      setTechs([...techs, resp.data]);
      toast.success("Tech criada com sucesso!");
      setModal(false);
    } catch (error) {
      console.error(error);
      toast.error("Algo deu errado");
    }
  };
  const deleteTechs = async (techsId) => {
    const newTech = techs.filter((element) => element.id !== techsId);

    try {
      const response = await api.delete(`users/techs/${techsId}`);

      setTechs(newTech);
      return response;
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <TechContext.Provider
      value={{ modal, setModal, onSubmit, techs, deleteTechs }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvaider;
