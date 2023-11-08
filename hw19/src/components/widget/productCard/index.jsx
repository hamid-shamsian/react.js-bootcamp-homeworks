import styled from "styled-components";
import { Card, ImgWrapper, ProductPrice, ProductTitle } from "../../base";

const Div = styled.div`
  padding: 20px;
`;

export const ProductCard = ({ product, onClick }) => {
  return (
    <Card onClick={onClick}>
      <ImgWrapper>
        <img src={product.img} alt='' width={250} />
      </ImgWrapper>
      <Div>
        <ProductTitle>{product.title}</ProductTitle>
        <ProductPrice $align='right'>{product.price}$</ProductPrice>
      </Div>
    </Card>
  );
};
