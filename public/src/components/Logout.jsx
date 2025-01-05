import React from "react";
import { useNavigate } from "react-router-dom";
import { BiPowerOff } from "react-icons/bi";
import styled from "styled-components";
import axios from "axios";

const Logout = () => {
  const navigate = useNavigate();
  const handleLogOUt = async () => {
    localStorage.clear();
    navigate("/login");
  };
  return (
    <Button onClick={handleLogOUt}>
      <BiPowerOff />
    </Button>
  );
};

export default Logout;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: #db0711e2;
  border: none;
  cursor: pointer;
  svg {
    font-size: 1.3rem;
    color: #ebe7ff;
  }
`;
