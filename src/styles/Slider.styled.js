import styled from "styled-components";

export const SliderSection = styled.section``;

export const Text = styled.p`
  font-family: "Dancing Script", cursive;
  /* font-family: "Poppins", sans-serif; */
  text-align: center;
  font-size: 1.5rem;
`;

export const SliderWrapper = styled.div`
  position: relative;
  margin: 2rem 0;
  overflow: hidden;
  white-space: nowrap;

  &::before,
  &::after {
    position: absolute;
    content: "";
    top: 0;
    height: 100%;
    width: 2.5rem;
    z-index: 2;
    pointer-events: none;
  }

  &::before {
    left: 0;
    background: linear-gradient(
      to left,
      rgba(251, 251, 251, 0),
      rgba(251, 251, 251, 1)
    );
  }

  &::after {
    right: 0;
    background: linear-gradient(
      to right,
      rgba(251, 251, 251, 0),
      rgba(251, 251, 251, 1)
    );
  }
`;

export const PictureSlides = styled.div`
  display: inline-block;
  animation: 90s slide infinite linear;

  img,
  video {
    height: 14.1rem;
    width: 7.2rem;
    object-fit: cover;
    margin-right: 1.3rem;
    cursor: pointer;
  }

  @keyframes slide {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;
