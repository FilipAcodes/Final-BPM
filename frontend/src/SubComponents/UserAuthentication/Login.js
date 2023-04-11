import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return <LoginButton onClick={() => loginWithRedirect()}>Log-in</LoginButton>;
};

export default Login;

const LoginButton = styled.button`
  color: white;
  font-size: 16px;
`;
