import styled, { keyframes } from "styled-components";
import Box from "../ui/Box";
import "../section/Card.css";

// 스켈레톤 애니메이션 정의
const move = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

// 스켈레톤 스타일 컴포넌트
const SkeletonCard = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    background: linear-gradient(-90deg, #eee, #919191, #eee);
    background-size: 400% 400%;
    animation: ${move} 2s ease-in-out infinite;
`;

// 스켈레톤 UI 컴포넌트
const CardSkeleton: React.FC = () => {
    return (
        <Box className="CardWrap" width="90%" height="64px" margin="10px auto">
            <SkeletonCard />
        </Box>
    );
};

export default CardSkeleton;
