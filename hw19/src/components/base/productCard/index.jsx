import styled from "styled-components";
import { Card } from "../card";
import { ImgWrapper } from "../imgWrapper";

const ProductTitle = styled.p`
  font-size: 16px;
  padding: 20px 0 10px 20px;
`;

const ProductPrice = styled.p`
  font-size: 20px;
  color: #56b280;
  padding: 0 20px 20px;
  font-family: Roboto;
  text-align: right;
`;

export const ProductCard = ({ product }) => {
  return (
    <Card>
      <ImgWrapper>
        <img src={product.img} alt='' width={250} />
      </ImgWrapper>
      <ProductTitle>{product.title}</ProductTitle>
      <ProductPrice>{product.price}$</ProductPrice>
    </Card>
  );
};
