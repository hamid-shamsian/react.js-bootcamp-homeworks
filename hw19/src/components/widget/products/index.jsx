import { useState } from "react";
import styled from "styled-components";
import { Heading } from "../../base";
import { Grid } from "../../layout";
import { ProductCard } from "../productCard";
import { ProductModal } from "../productModal";
import data from "../../../products.json";

const { products } = data;

const P = styled.p`
  text-align: center;
  font-family: Poppins;
  margin-bottom: 40px;
`;

export const Products = () => {
  const [showingProduct, setShowingProduct] = useState(null);

  return (
    <>
      <Heading>Products</Heading>
      <P>Order it for yourself or for your beloved ones</P>

      <Grid cols={2} $gap={35}>
        {products.map(p => (
          <ProductCard key={p.id} product={p} onClick={() => setShowingProduct(p)} />
        ))}
      </Grid>

      {showingProduct && <ProductModal product={showingProduct} onClose={() => setShowingProduct(null)} />}
    </>
  );
};
