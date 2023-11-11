import styled from "styled-components";

export const Container = styled.div`
  @media screen and (min-width: 500px) {
    display: none;
  }
`;

export const DesktopNotif = styled.p`
  display: none;
  font-family: "Poppins", sans-serif;
  font-size: 2rem;
  text-align: center;

  @media screen and (min-width: 500px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
`;
