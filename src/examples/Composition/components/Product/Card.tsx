import { FC, ReactNode } from "react";
import styled from "styled-components";
import IProduct from "../../../../models/product.model";
import ProductContextProvider from "./Context";

type Props = {
  product: IProduct;
  thumbnail?: ReactNode;
  info?: ReactNode;
  action?: ReactNode;
};

const ProductCard: FC<Props> = ({ product, thumbnail, info, action }) => {
  return (
    <ProductContextProvider product={product}>
      <StyledProductCard>
        {thumbnail}
        {info}
        {action}
      </StyledProductCard>
    </ProductContextProvider>
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
