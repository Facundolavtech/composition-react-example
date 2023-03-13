import styled from "styled-components";
import { useProductContext } from "./Context";

const Stock = () => {
  const { product } = useProductContext();

  return (
    <StyledStock>
      {product.stock >= 1 ? (
        `${product.stock} units in Stock`
      ) : (
        <span className="no__stock">No stock</span>
      )}
    </StyledStock>
  );
};

export default Stock;

const StyledStock = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #838383;

  &.no__stock {
    color: red;
  }
`;
