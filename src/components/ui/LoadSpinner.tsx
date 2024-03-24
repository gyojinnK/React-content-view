import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-top: 4px solid black;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
    top: calc(50% - 25px);
    left: calc(50% - 25px);
    position: absolute;
`;

const LoadSpinner = () => {
    return <Spinner />;
};

export default LoadSpinner;
