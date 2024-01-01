import styled from "styled-components";
import { Backdrop } from "../../layout";
import { Button, Input } from "../../base";
import { useState } from "react";

const Container = styled.div`
  padding: 20px;
  background-color: #d9d9d9;
  border-radius: 30px;
  font-family: Roboto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const initialState = { name: { value: "", valid: null }, email: { value: "", valid: null }, address: { value: "", valid: null } };

const validate = ({ name, value }) => {
  switch (name) {
    case "name":
      return /^[a-z]([-']?[a-z]+)*( [a-z]([-']?[a-z]+)*)+$/.test(value);
    case "email":
      return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(value);
    case "address":
      return value.trim().length > 5;
    default:
      return;
  }
};

export const CheckoutModal = ({ onClose, onSubmit }) => {
  const [inputs, setInputs] = useState(initialState);

  const handleChange = ({ target }) => {
    setInputs(prevInputs => ({ ...prevInputs, [target.name]: { value: target.value, valid: validate(target) } }));
  };

  const { name, email, address } = inputs;
  const formIsValid = name.valid && email.valid && address.valid;

  return (
    <Backdrop onClick={onClose}>
      <Container>
        <p>Customer Info</p>

        <Div>
          <Input type='text' name='name' placeholder='Name' $valid={name.valid} value={name.value} onChange={handleChange} />
          <Input type='email' name='email' placeholder='Email' $valid={email.valid} value={email.value} onChange={handleChange} />
          <Input type='text' name='address' placeholder='Address' $valid={address.valid} value={address.value} onChange={handleChange} />
        </Div>

        <Button $size='small' $forbidden={!formIsValid} onClick={() => formIsValid && onSubmit(inputs)}>
          Submit
        </Button>
      </Container>
    </Backdrop>
  );
};
