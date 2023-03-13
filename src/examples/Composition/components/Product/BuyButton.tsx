import { FC } from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const BuyButton: FC<Props> = ({ onClick }) => {
  return (
    <StyledBuyButton onClick={onClick}>
      Buy <i className="fa fa-shopping-cart" />
    </StyledBuyButton>
  );
};

export default BuyButton;

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
