import { FC } from "react";
import { FlexContainer } from "../..";
import Title from "./Title";
import Description from "./Description";
import Price from "./Price";
import Rating from "./Rating";
import Stock from "./Stock";

type Props = {
  title: string;
  description: string;
  rating: number;
  stock: number;
  price: number;
  discount: number;
};

const Info: FC<Props> = ({
  title,
  rating,
  stock,
  price,
  discount,
  description,
}) => {
  return (
    <>
      <FlexContainer>
        <Title>{title}</Title>
        <Rating rating={rating} />
      </FlexContainer>
      <Stock stock={stock} />
      <Price price={price} discount={discount} />
      <Description>{description}</Description>
    </>
  );
};

export default Info;
