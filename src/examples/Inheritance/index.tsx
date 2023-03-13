import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";
import styled from "styled-components";
import ProductCard from "./components/Product/Card";

const Inheritance = () => {
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
          key={p.id}
          title={p.title}
          description={p.description}
          price={p.price}
          discount={p.discountPercentage}
          rating={p.rating}
          stock={p.stock}
          thumbnail={p.thumbnail}
        />
      ))}
    </div>
  );
};

export default Inheritance;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
