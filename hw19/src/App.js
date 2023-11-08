import { Col, Header, Hero, Row, Products } from "./components";
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
        </Row>
      </CartProvider>
    </>
  );
};

export default App;
