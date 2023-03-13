import { FC } from "react";
import styled from "styled-components";

type Props = {
  stock: number;
};

const Stock: FC<Props> = ({ stock }) => {
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

export default Stock;

const StyledStock = styled.h3`
  font-size: 14px;
  font-weight: 500;
  color: #838383;

  &.no__stock {
    color: red;
  }
`;
