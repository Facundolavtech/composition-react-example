import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";
import styled from "styled-components";
import ProductCard from "./components/Product/Card";
import Thumbnail from "./components/Product/Thumbnail";
import Info from "./components/Product/Info";
import BuyButton from "./components/Product/BuyButton";
import Title from "./components/Product/Title";
import Rating from "./components/Product/Rating";
import Stock from "./components/Product/Stock";
import Price from "./components/Product/Price";
import Description from "./components/Product/Description";

const Composition = () => {
  const { error, loading, products } = useProducts();

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <div className="products__grid">
      {products.map((p) => (
        <ProductCard
          product={p}
          key={p.id}
          info={
            <Info>
              <FlexContainer>
                <Title />
                <Rating />
              </FlexContainer>
              <Stock />
              <Price />
              <Description />
            </Info>
          }
          thumbnail={<Thumbnail />}
          action={
            <BuyButton onClick={() => console.log(`Buying product ${p.id}`)} />
          }
        />
      ))}
    </div>
  );
};

export default Composition;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
