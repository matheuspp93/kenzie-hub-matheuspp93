import logo from "../../assets/img/Logo.svg";
import Tecnlogies from "../../components/Technolgies";
import TechProvaider from "../../contexts/TechContext";
import * as S from "./style.dashboard";

const Dashboard = () => {
  const module = localStorage.getItem("@kenzieHub:curso");
  const name = localStorage.getItem("@kenzieHub:user");

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
          <h1>Olá {name}</h1>
          <p>{module}</p>
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
