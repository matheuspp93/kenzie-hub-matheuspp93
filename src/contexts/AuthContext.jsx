import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
// import { toast } from "react-toastify";
import { login } from "../constants/endpoints";
import { api } from "../services/api";

export const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  async function loadUser() {
    const token = localStorage.getItem("@kenzieHub:token");
    if (token) {
      try {
        api.defaults.headers.authorization = `Bearer ${token}`;

        const { data } = await api.get("/profile");

        setUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    setLoading(false);
  }

  useEffect(() => {
    loadUser();
  }, []);

  const loginUser = async (data) => {
    try {
      const response = await api.post(login, data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem("@kenzieHub:token", token);

      toast.success("Login realizado com sucesso");

      navigate("/Dashboard", { replace: true });
    } catch (error) {
      console.log(error);
      toast.error("Login ou senha Invalido");
    }
  };

  return (
    <AuthContext.Provider
      value={{ loginUser, user, loading, setLoading, loadUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
