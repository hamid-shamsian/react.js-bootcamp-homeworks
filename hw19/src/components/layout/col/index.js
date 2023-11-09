import styled from "styled-components";

export const Col = styled.div`
  padding: 50px;
  width: 50%;
  background-color: ${({ $bgColor }) => $bgColor ?? "transparent"};
`;
