import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-gap: ${({ gap }) => gap}px;
`;
