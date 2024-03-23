import styled from "styled-components";

type BoxProps = {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    flexdirection?: string;
    bgcolor?: string;
};

const Box = styled.div<BoxProps>`
    margin: ${({ margin }) => margin || "0"};
    padding: ${({ padding }) => padding || "0"};
    width: ${({ width }) => width || "auto"};
    height: ${({ height }) => height || "auto"};
    flex-direction: ${({ flexdirection }) => flexdirection || "row"};
    background-color: ${({ bgcolor }) => bgcolor || "white"};
    display: flex;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0.1px;
    overflow: hidden;
`;

export default Box;
