import styled from "styled-components";

export const ProductTitle = styled.p`
  font-size: ${({ $size }) => $size ?? "16"}px;
  margin-bottom: 10px;
  font-weight: ${({ $bold }) => $bold && "bold"};
`;
