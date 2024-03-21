import styled from "styled-components";

type BoxProps = {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
};

const Box = styled.div<BoxProps>`
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    border-radius: 25px;
`;

export default Box;
