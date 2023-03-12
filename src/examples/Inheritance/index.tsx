import { FC } from "react";
import Error from "../../components/Error";
import Loading from "../../components/Loading";
import useProducts from "../../hooks/useProducts";
import IProduct from "../../models/product.model";
import styled from "styled-components";

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
        <Product key={p.id} product={p} />
      ))}
    </div>
  );
};

export default Inheritance;

const Product: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <StyledProduct>
      <Image src={product.thumbnail} alt={`${product.title} thumbnail`} />
      <FlexContainer>
        <Title title={product.title} />
        <Rating rating={product.rating} />
      </FlexContainer>
      <Stock stock={product.stock} />
      <Price price={product.price} discount={product.discountPercentage} />
      <Description description={product.description} />
      <BuyButton />
    </StyledProduct>
  );
};

const Image: FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return <StyledImage loading="lazy" src={src} alt={alt} />;
};

const Title: FC<{ title: string }> = ({ title }) => {
  return <StyledTitle>{title}</StyledTitle>;
};

const Rating: FC<{ rating: number }> = ({ rating }) => {
  return (
    <StyledRatingContainer>
      <StyledRatingStar className={`fa fa-star ${rating >= 1 && "checked"}`} />
      <StyledRatingStar className={`fa fa-star ${rating >= 2 && "checked"}`} />
      <StyledRatingStar className={`fa fa-star ${rating >= 3 && "checked"}`} />
      <StyledRatingStar className={`fa fa-star ${rating >= 4 && "checked"}`} />
      <StyledRatingStar className={`fa fa-star ${rating >= 5 && "checked"}`} />
    </StyledRatingContainer>
  );
};

const Price: FC<{ price: number; discount?: number }> = ({
  price,
  discount,
}) => {
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

const Description: FC<{ description: string }> = ({ description }) => {
  return <StyledDescription>{description}</StyledDescription>;
};

const Stock: FC<{ stock: number }> = ({ stock }) => {
  return (
    <StyledStock>
      {stock >= 1 ? (
        `${stock} units in Stock`
      ) : (
        <span className="no__stock">No stock</span>
      )}
    </StyledStock>
  );
};

const BuyButton = () => {
  return (
    <StyledBuyButton>
      Buy <i className="fa fa-shopping-cart" />
    </StyledBuyButton>
  );
};

const StyledProduct = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  gap: 12px;
  border-radius: 10px;
  border: 1px solid #dbdbdb;
  background-color: #fff;
`;

const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: contain;
`;

const StyledTitle = styled.h2`
  font-weight: 500;
  color: #535353;
  font-size: 18px;
`;

const StyledRatingContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 5px;
`;

const StyledRatingStar = styled.span`
  font-size: 12px;

  &.checked {
    color: #ffa500;
  }
`;

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

const StyledDescription = styled.h3`
  font-weight: 400;
  font-size: 14px;
  color: #999999;
`;

const StyledDiscount = styled.span`
  font-size: 14px;
  color: green;
  font-weight: 500;
`;

const StyledStock = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #838383;

  &.no__stock {
    color: red;
  }
`;

const StyledBuyButton = styled.button`
  outline: none;
  border: none;
  width: 100%;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  background-color: #0b9e0b;
  color: #fff;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;

  :hover {
    cursor: pointer;
    background-color: #08ac08;
  }

  i {
    color: #fff;
  }
`;
