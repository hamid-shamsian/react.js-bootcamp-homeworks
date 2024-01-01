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

const Badge = styled.span`
  background-color: aqua;
  display: inline-block;
  padding: 5px 13px;
  border-radius: 50%;
`;

export const CartItem = ({ item, onRemove, onIncr, onDecr, $static }) => {
  return (
    <Card $static={$static}>
      <Container>
        <ImgWrapper>
          <img src={item.img} alt='' width={$static ? 100 : 200} />
        </ImgWrapper>
        <Div>
          <ProductTitle>{item.title}</ProductTitle>
          <Div2>
            <ProductPrice>${item.price}</ProductPrice>
            {onIncr && <Quantity qty={item.qty} onIncr={() => onIncr(item.id)} onDecr={() => onDecr(item.id)} />}
            {!onIncr && <Badge>{item.qty}</Badge>}
            <Total>
              <ProductPrice>${(item.price * item.qty).toFixed(2)}</ProductPrice>
            </Total>
          </Div2>
          {onRemove && <RemoveBtn onClick={() => onRemove(item.id)} />}
        </Div>
      </Container>
    </Card>
  );
};
