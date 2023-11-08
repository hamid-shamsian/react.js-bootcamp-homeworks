import styled from "styled-components";

export const ProductPrice = styled.p`
  font-size: 20px;
  color: #56b280;
  font-family: Roboto;
  text-align: ${({ $align }) => $align ?? "left"};
`;
