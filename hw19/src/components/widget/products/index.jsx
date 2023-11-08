import styled from "styled-components";
import { Heading, ProductCard } from "../../base";
import { Grid } from "../../layout";
import data from "../../../products.json";

const { products } = data;

const P = styled.p`
  text-align: center;
  font-family: Poppins;
  margin-bottom: 40px;
`;

export const Products = () => {
  return (
    <>
      <Heading>Products</Heading>
      <P>Order it for yourself or for your beloved ones</P>

      <Grid cols={2} $gap={35}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </Grid>
    </>
  );
};
