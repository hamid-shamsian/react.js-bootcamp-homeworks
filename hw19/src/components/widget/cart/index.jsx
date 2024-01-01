import { useContext, useState } from "react";
import styled from "styled-components";
import { Button, Heading } from "../../base";
import { CartContext } from "../../../contexts/cart-context";
import { CartItem } from "../cartItem";
import { CheckoutModal } from "../checkoutModal";
import { ConfirmModal } from "../confirmModal";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 60px 0;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 50px;
  font-family: Roboto;
  font-size: 18px;
`;

const P = styled.p`
  font-size: 20px;
  font-family: Poppins;
  text-align: center;
  color: #0008;
`;

export const Cart = () => {
  const { cart, dispatchCart } = useContext(CartContext);

  const [modal, setModal] = useState(null);
  const [orderData, setOrderData] = useState(null);

  const handleRemoveItem = id => dispatchCart({ type: "DELETE", itemId: id });
  const handleIncr = id => dispatchCart({ type: "INCR_QTY", itemId: id });
  const handleDecr = id => dispatchCart({ type: "DECR_QTY", itemId: id });

  const handleSubmitOrder = customerData => {
    const data = { cart, customer: {} };
    for (let key in customerData) data.customer[key] = customerData[key].value;
    setOrderData(data);
    setModal("confirmation");
    dispatchCart({ type: "CLEAR" });
  };

  const subTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2);

  return (
    <>
      <Heading>Your Cart</Heading>

      <Container>
        {cart.length ? (
          cart.map(item => <CartItem key={item.id} item={item} onRemove={handleRemoveItem} onIncr={handleIncr} onDecr={handleDecr} />)
        ) : (
          <P>No Items in Your Cart!</P>
        )}
      </Container>

      <Div>
        <p>Sub-Total: ${subTotal}</p>
        <Button $forbidden={!cart.length} onClick={() => cart.length && setModal("checkout")}>
          CheckOut
        </Button>
      </Div>

      {modal === "checkout" && <CheckoutModal onClose={() => setModal(null)} onSubmit={handleSubmitOrder} />}
      {modal === "confirmation" && <ConfirmModal orderData={orderData} onClose={() => setModal(null)} />}
    </>
  );
};
