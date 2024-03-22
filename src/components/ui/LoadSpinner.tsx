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
    border: 4px solid rgba(0, 0, 0, 0.1); // 바깥 원 테두리 색상과 두께
    border-top: 4px solid blue; // 상단 원 테두리 색상과 두께
    border-radius: 50%; // 원형 모양
    width: 50px; // 크기
    height: 50px; // 크기
    animation: ${spin} 2s linear infinite; // 애니메이션 적용
`;

const LoadSpinner = () => {
    return <Spinner />;
};

export default LoadSpinner;
