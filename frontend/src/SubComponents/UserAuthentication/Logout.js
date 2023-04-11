import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

const Logout = () => {
  const { logout } = useAuth0();
  return <LogOutButton onClick={() => logout()}>Logout</LogOutButton>;
};

export default Logout;

const LogOutButton = styled.button`
  color: white;
  font-size: 16px;
`;
