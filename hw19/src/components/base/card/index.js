import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0px 4px 24px 0px rgba(123, 123, 123, 0.15);
  font-family: Poppins;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 24px 0px rgba(123, 123, 123, 0.35);
  }
`;
