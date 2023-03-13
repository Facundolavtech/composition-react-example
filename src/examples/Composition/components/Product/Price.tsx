import styled from "styled-components";
import { useProductContext } from "./Context";

const Price = () => {
  const { product } = useProductContext();

  const priceWithDiscount = product.discountPercentage
    ? Number(
        product.price - (product.price * product.discountPercentage) / 100
      ).toFixed(2)
    : null;

  return (
    <StyledPrice>
      ${priceWithDiscount ? priceWithDiscount : product.price} USD{" "}
      {product.discountPercentage && (
        <>
          / <strong>{product.price} USD</strong>
          <br />
          <StyledDiscount>{product.discountPercentage}% OFF</StyledDiscount>
        </>
      )}
    </StyledPrice>
  );
};

export default Price;

const StyledPrice = styled.h3`
  font-size: 16px;
  font-weight: 500;
  color: #b8b8b8;

  strong {
    text-decoration: line-through;
    font-weight: 500;
    color: red;
  }
`;

const StyledDiscount = styled.span`
  font-size: 14px;
  color: green;
  font-weight: 500;
`;
