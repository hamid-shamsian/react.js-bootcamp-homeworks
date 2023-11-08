import { Col, Header, Hero, Row, Products } from "./components";
import "./App.css";

const App = () => {
  return (
    <>
      <Header></Header>

      <Hero></Hero>

      <Row>
        <Col>
          <Products />
        </Col>
      </Row>
    </>
  );
};

export default App;
