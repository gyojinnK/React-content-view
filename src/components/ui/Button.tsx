import styled from "styled-components";

type BottonProps = {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    bodercolor?: string;
    color?: string;
    fontfam?: string;
    fontSize?: string;
};

const Button = styled.button<BottonProps>`
    border-radius: 25px;
    background-color: white;
    align-items: center;
    outline: none;
    cursor: pointer;
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    color: ${({ color }) => color || "rgb(255, 97, 210)"};
    border-color: ${({ bodercolor }) => bodercolor || "rgb(255, 97, 210)"};
    font-size: ${({ fontSize }) => fontSize || "auto"};
    font-family: ${({ fontfam }) => fontfam || "var(--font-nanum)"};
`;

export default Button;
