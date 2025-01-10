import { useContext } from 'react';
import { UserContext } from '../Contexts/UserContext';
import { useNavigate } from 'react-router-dom';

export const UseLogout = () => {
  const { setUserState } = useContext(UserContext);
  const navigate = useNavigate();

  const logout = () => {
    setUserState(false);
    sessionStorage.removeItem("authToken");
    navigate("/");
  };

  return logout;
};