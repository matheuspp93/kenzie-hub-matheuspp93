import { LinkStyled as Link } from "./style.home";
import logo from "../../assets/img/Logo.svg";
import * as S from "./style.home";

const Home = () => (
  <S.ContainerHome>
    <img src={logo} alt="" />
    <Link to="/register">
      <span>Register</span>
    </Link>
    <Link to="/login">
      <span>login</span>
    </Link>
  </S.ContainerHome>
);

export default Home;
