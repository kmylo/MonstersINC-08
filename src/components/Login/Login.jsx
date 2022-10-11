import React from "react";

import { useLocation, useNavigate } from "react-router";
import { useAuthCtx } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuthCtx();
  const navigate = useNavigate();
  const { state } = useLocation();

  console.log(state);

  const handleClick = () => {
    login();
    navigate(state?.location?.pathname ?? "/");
  };
  return (
    <div>
      <h1>Login</h1>
      <span>some ToDo</span>
      <div>
        <button onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Login;
