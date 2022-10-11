import * as S from "./style";
import Header from "../../components/Header";
import FormLogin from "../../components/FormLogin";

const Login = () => (
  <>
    <Header />
    <S.Container>
      <FormLogin />
    </S.Container>
  </>
);

export default Login;
