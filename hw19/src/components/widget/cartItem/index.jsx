import styled from "styled-components";
import { Card, ImgWrapper, ProductPrice, ProductTitle, Quantity } from "../../base";

const Container = styled.div`
  display: flex;
`;

const Div = styled.div`
  padding: 15px 20px;
`;

const Div2 = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Total = styled.div`
  position: relative;

  &::before {
    content: "Total";
    position: absolute;
    bottom: -15px;
    right: 0;
    font-size: 12px;
  }
`;

const RemoveBtn = styled.span`
  text-decoration: underline;
  color: red;
  cursor: pointer;
  display: inline-block;
  margin-top: 20px;

  &::before {
    content: "Remove";
  }
`;

export const CartItem = ({ item, onRemove, onIncr, onDecr }) => {
  return (
    <Card>
      <Container>
        <ImgWrapper>
          <img src={item.img} alt='' width={200} />
        </ImgWrapper>
        <Div>
          <ProductTitle>{item.title}</ProductTitle>
          <Div2>
            <ProductPrice>${item.price}</ProductPrice>
            <Quantity qty={item.qty} onIncr={() => onIncr(item.id)} onDecr={() => onDecr(item.id)} />
            <Total>
              <ProductPrice>${(item.price * item.qty).toFixed(2)}</ProductPrice>
            </Total>
          </Div2>
          <RemoveBtn onClick={() => onRemove(item.id)} />
        </Div>
      </Container>
    </Card>
  );
};
