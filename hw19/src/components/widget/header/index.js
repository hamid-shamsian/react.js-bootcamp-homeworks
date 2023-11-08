import styled from "styled-components";
import logo from "../../../images/nav-logo.png";
import profileImg from "../../../images/nav-profile.png";
import cartImg from "../../../images/nav-cart.png";
import chevron from "../../../images/chevron-down.png";

const Container = styled.header`
  height: 60px;
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        <img src={profileImg} alt='' />
        <img src={cartImg} alt='' />
      </Icons>
    </Container>
  );
};
