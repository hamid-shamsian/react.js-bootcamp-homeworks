import styled from "styled-components";

export const Button = styled.button`
  border-radius: 4px;
  background: ${({ $forbidden }) => ($forbidden ? "#999" : "#56b280")};
  border: 0;
  padding: ${({ $size }) => ($size === "small" ? "2px 20px" : "10px 50px")};
  color: #fff;
  font-family: Roboto;
  font-size: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
  ${({ $size }) => ($size === "small" ? "" : "flex-grow: 1;")}
  cursor: ${({ $forbidden }) => ($forbidden ? "not-allowed" : "pointer")};
`;
