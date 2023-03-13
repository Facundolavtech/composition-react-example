import { FC } from "react";
import styled from "styled-components";
import BuyButton from "./BuyButton";
import Thumbnail from "./Thumbnail";
import Info from "./Info";

type Props = {
  thumbnail: string;
  title: string;
  description: string;
  rating: number;
  stock: number;
  price: number;
  discount: number;
};

const ProductCard: FC<Props> = ({
  thumbnail,
  description,
  discount,
  price,
  rating,
  stock,
  title,
}) => {
  return (
    <StyledProductCard>
      <Thumbnail src={thumbnail} alt={`${title} thumbnail`} />
      <Info
        title={title}
        description={description}
        discount={discount}
        price={price}
        rating={rating}
        stock={stock}
      />
      <BuyButton />
    </StyledProductCard>
  );
};

export default ProductCard;

const StyledProductCard = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
`;
