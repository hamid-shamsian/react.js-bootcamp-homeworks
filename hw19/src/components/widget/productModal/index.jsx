import styled from "styled-components";
import { Backdrop } from "../../layout";
import { Button, ProductPrice, ProductTitle } from "../../base";
import freeShipImg from "../../../images/free-shipping.jpg";
import cartImg from "../../../images/cart-white.png";

const Container = styled.div`
  padding: 50px;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  gap: 30px;
  font-family: Poppins;
`;

const Desc = styled.p`
  text-align: center;
  margin-bottom: 20px;
`;

const LeftCol = styled.div`
  text-align: center;
`;

const RightCol = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  border: 1px solid white;
  border-radius: 7px;
  padding: 15px;
  margin: 20px 0;
`;

export const ProductModal = ({ product, onClose }) => {
  return (
    <Backdrop onClick={onClose}>
      <Container>
        <LeftCol>
          <ProductTitle $size={20} $bold={true}>
            {product.title}
          </ProductTitle>
          <img src={product.img} alt='' />
          <Desc>{product.desc}</Desc>
          <img src={freeShipImg} alt='' width={150} />
        </LeftCol>
        <RightCol>
          <div>
            <ProductPrice>${product.price}</ProductPrice>
            <ProductDetails>{product.details}</ProductDetails>
          </div>
          <Button>
            <img src={cartImg} alt='' />
            Add to Cart
          </Button>
        </RightCol>
      </Container>
    </Backdrop>
  );
};
