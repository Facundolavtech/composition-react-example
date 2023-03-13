import { FC } from "react";
import styled from "styled-components";

type Props = {
  price: number;
  discount: number;
};

const Price: FC<Props> = ({ price, discount }) => {
  const priceWithDiscount = discount
    ? Number(price - (price * discount) / 100).toFixed(2)
    : null;

  return (
    <StyledPrice>
      ${priceWithDiscount ? priceWithDiscount : price} USD{" "}
      {discount && (
        <>
          / <strong>{price} USD</strong>
          <br />
          <StyledDiscount>{discount}% OFF</StyledDiscount>
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
