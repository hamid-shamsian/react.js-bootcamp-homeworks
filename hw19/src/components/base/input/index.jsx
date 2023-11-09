import styled from "styled-components";

const StyledInput = styled.input`
  border-width: 3px;
  border-color: ${({ $valid, value }) => (!value || $valid ? "transparent" : "red")};
  outline: 0;
  width: 300px;
  padding: 7px;
  border-radius: 3px;
`;

export const Input = props => {
  return <StyledInput {...props} required />;
};
