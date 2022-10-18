import { useContext } from "react";

import logo from "../../assets/img/Logo.svg";
import Tecnlogies from "../../components/Technolgies";
import { AuthContext } from "../../contexts/AuthContext";
import TechProvaider from "../../contexts/TechContext";
import * as S from "./style.dashboard";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  const logOut = () => {
    window.localStorage.clear();
  };

  return (
    <>
      <S.Header>
        <img src={logo} alt="" />
        <S.LinkStyled to="/home" onClick={logOut}>
          Sair
        </S.LinkStyled>
      </S.Header>
      <S.DashboardContainer>
        <S.ContainerUser>
          <h1>Olá {user.name} </h1>
          <p>{user.course_module}</p>
        </S.ContainerUser>
        <S.ContainerError>
          <TechProvaider>
            <Tecnlogies />
          </TechProvaider>
        </S.ContainerError>
      </S.DashboardContainer>
    </>
  );
};

export default Dashboard;
