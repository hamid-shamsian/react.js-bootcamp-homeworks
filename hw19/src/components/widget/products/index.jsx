import styled from "styled-components";
import { Heading } from "../../base";
import { Grid } from "../../layout";

const P = styled.p`
  text-align: center;
  font-family: Poppins;
  margin-bottom: 40px;
`;

export const Products = ({ products }) => {
  return (
    <>
      <Heading>Products</Heading>
      <P>Order it for yourself or for your beloved ones</P>

      <Grid cols={2} gap={20}></Grid>
    </>
  );
};
