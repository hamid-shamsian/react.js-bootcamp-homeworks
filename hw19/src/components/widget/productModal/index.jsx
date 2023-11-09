import { useContext, useState } from "react";
import styled from "styled-components";
import { Backdrop } from "../../layout";
import { Button, ProductPrice, ProductTitle, Quantity } from "../../base";
import { CartContext } from "../../../contexts/cart-context";
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

const Div = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
`;

const Warning = styled.div`
  position: absolute;
  right: 0;
  bottom: -30px;
  color: #666;
`;

export const ProductModal = ({ product, onClose }) => {
  const [qty, setQty] = useState(1);
  const { cart, dispatchCart } = useContext(CartContext);

  const existedInCart = cart.find(item => item.id === product.id);

  const handleAddToCart = () => {
    dispatchCart({ type: "ADD", item: { ...product, qty } });
    if (!existedInCart) onClose();
  };

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

          <Div>
            {!existedInCart && <Quantity qty={qty} onIncr={() => setQty(q => q + 1)} onDecr={() => setQty(q => q - 1)} />}
            <Button onClick={handleAddToCart} $forbidden={existedInCart}>
              <img src={cartImg} alt='' />
              Add to Cart
            </Button>
            {existedInCart && <Warning>Already in your Cart!</Warning>}
          </Div>
        </RightCol>
      </Container>
    </Backdrop>
  );
};
