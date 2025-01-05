import React from "react";
import styled from "styled-components";
import Hi from "../assets/Hi.gif";
const Welcome = ({ currentUser }) => {
  return (
    <Container>
      <img src={Hi} alt="" />
      <h1>
        Welcome, <span>{currentUser.username}!</span>
      </h1>
      <h3>Please Select Chat....</h3>
    </Container>
  );
};

export default Welcome;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  color: wheat;
  img {
    height: 20rem;
    border-radius: 5%;
    margin-bottom: 2rem;
  }
  span {
    color: #5b00d3;
  }
`;
