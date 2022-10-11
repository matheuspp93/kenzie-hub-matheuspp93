import logo from "../../assets/img/Logo.svg";
import * as S from "./style.dashboard";

const Dashboard = () => {
  const module = localStorage.getItem("@kenzieHub:curso");
  const name = localStorage.getItem("@kenzieHub:user");
  return (
    <>
      <S.Header>
        <img src={logo} alt="" />
        <S.LinkStyled to="/home">Sair</S.LinkStyled>
      </S.Header>
      <S.DashboardContainer>
        <S.ContainerUser>
          <h1>Olá {name}</h1>
          <p>{module}</p>
        </S.ContainerUser>
        <S.ContainerError>
          <h2>Ainda estamos em desenvolvimento </h2>
          <p>
            Nossa aplicação está sendo desenvolvida, em breve teremos novidade
          </p>
        </S.ContainerError>
      </S.DashboardContainer>
    </>
  );
};

export default Dashboard;
