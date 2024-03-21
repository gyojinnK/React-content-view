import styled from "styled-components";

type BottonProps = {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    backgroundColor?: string;
};

const Button = styled.div<BottonProps>`
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};
  width: ${({ width }) => width || "auto"};
  height: ${({ height }) => height || "auto"};
  border-radius: 25px;
  background-color: ${({ backgroundColor }) =>
      backgroundColor || "var(--color-light)"}
  border-radius: 25px;
`;

export default Button;
