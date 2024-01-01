import { Col, Header, Hero, Row, Products, Cart } from "./components";
import "./App.css";
import CartProvider from "./contexts/cart-context";

const App = () => {
  return (
    <>
      <Header></Header>

      <Hero></Hero>

      <CartProvider>
        <Row>
          <Col>
            <Products />
          </Col>
          <Col>
            <Cart />
          </Col>
        </Row>
      </CartProvider>
    </>
  );
};

export default App;
