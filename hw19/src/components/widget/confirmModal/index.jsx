import styled from "styled-components";
import { Backdrop, Col, Row } from "../../layout";
import logo from "../../../images/nav-logo.png";
import checkImg from "../../../images/check-circle.png";
import { Button } from "./../../base/button/index";
import { CartItem } from "../cartItem";

const Container = styled.div`
  overflow: hidden;
  background-color: #d9d9d9;
  border-radius: 50px;
  display: flex;
  gap: 30px;
  font-family: Poppins;
  width: 900px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Div2 = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-height: 300px;
  overflow-y: auto;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const H3 = styled.h3`
  white-space: nowrap;
`;

const Div3 = styled.div`
  border: 1px solid #aaa;
  border-radius: 10px;
  white-space: nowrap;
  color: #777;
  padding: 0 10px;

  & span {
    color: #000;
  }

  & p {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    gap: 10px;
  }

  & p:first-child,
  & p:nth-child(2) {
    border-bottom: 1px solid #aaa;
  }
`;

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;

const P = styled.p`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

export const ConfirmModal = ({ onClose, orderData: { cart, customer } }) => {
  const subTotal = cart.reduce((sum, item) => sum + item.qty * item.price, 0).toFixed(2);

  return (
    <Backdrop onClick={onClose}>
      <Container>
        <Row>
          <Col>
            <Div>
              <img src={logo} alt='' />
              <img src={checkImg} alt='' width={80} />
              <H3>Payment Confirmed</H3>
              <Div3>
                <p>
                  Contact: <span>{customer.email}</span>
                </p>
                <p>
                  Name: <span>{customer.name}</span>
                </p>
                <p>
                  Ship to: <span>{customer.address}</span>
                </p>
              </Div3>
              <Button onClick={onClose}>Back to Shopping</Button>
            </Div>
          </Col>
          <Col $bgColor='#fff'>
            <Div4>
              <Div2>
                {cart.map(item => (
                  <CartItem key={item.id} item={item} $static={true} />
                ))}
              </Div2>
              <div>
                <hr />
                <P>
                  Subtotal <span>${subTotal}</span>
                </P>
                <P>
                  Shipping <span>Free Shipping</span>
                </P>
                <hr />
                <P>
                  Paid <span>${subTotal}</span>
                </P>
              </div>
            </Div4>
          </Col>
        </Row>
      </Container>
    </Backdrop>
  );
};
