import styled from "styled-components";
import logo from "../../../images/nav-logo.png";
import profileImg from "../../../images/nav-profile.png";
import cartImg from "../../../images/nav-cart.png";
import chevron from "../../../images/chevron-down.png";

const Container = styled.header`
  height: 60px;
  padding: 0 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  background-color: white;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: 0 0 5px #0004;
  z-index: 1;
`;

const Ul = styled.ul`
  list-style: none;
  font-family: Roboto;
  display: flex;
  gap: 50px;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Header = () => {
  return (
    <Container>
      <img src={logo} alt='' />
      <Ul>
        <li>
          Discovery <img src={chevron} alt='' />
        </li>
        <li>About</li>
        <li>Contact Us</li>
      </Ul>
      <Icons>
        <img src={profileImg} alt='' width={25} />
        <img src={cartImg} alt='' width={25} />
      </Icons>
    </Container>
  );
};
