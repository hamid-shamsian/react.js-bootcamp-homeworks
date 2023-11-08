import styled from "styled-components";

const Div = styled.div`
  display: flex;
  border-radius: 5px;
  overflow: hidden;
  width: fit-content;
  min-height: 30px;
`;

const DecrBtn = styled.button`
  color: white;
  font-weight: bold;
  font-size: 25px;
  width: 40px;
  background-color: red;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "−";
  }
`;

const IncrBtn = styled.button`
  color: white;
  font-weight: bold;
  font-size: 25px;
  width: 40px;
  background-color: green;
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "+";
  }
`;

const Count = styled.div`
  width: 40px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
`;

export const Quantity = ({ count = 1, onIncr, onDecr }) => {
  return (
    <Div>
      <DecrBtn onClick={() => count - 1 && onDecr()} />
      <Count>{count}</Count>
      <IncrBtn onClick={onIncr} />
    </Div>
  );
};
