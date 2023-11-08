import styled from "styled-components";
import heroBGImg from "../../../images/bg-image.jpg";
import heroTitleImg from "../../../images/hero-title.png";
import { Button } from "../../base";

const HeroBG = styled.div`
  background-image: url(${heroBGImg});
  background-size: cover;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 60px;
`;

const HeroMsg = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff8;
  backdrop-filter: blur(12px);
  border-radius: 5px;
  padding: 50px;
  text-align: center;
`;

const P = styled.p`
  font-family: Helvetica;
  margin: 10px 0 50px 0;
`;

export const Hero = () => {
  return (
    <HeroBG>
      <HeroMsg>
        <img src={heroTitleImg} alt='' width={350} />
        <P>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </P>
        <Button>Discover our collection</Button>
      </HeroMsg>
    </HeroBG>
  );
};
