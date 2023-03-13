import styled from "styled-components";
import { useProductContext } from "./Context";

const Rating = () => {
  const { product } = useProductContext();

  return (
    <StyledRatingContainer>
      <StyledRatingStar
        className={`fa fa-star ${product.rating >= 1 && "checked"}`}
      />
      <StyledRatingStar
        className={`fa fa-star ${product.rating >= 2 && "checked"}`}
      />
      <StyledRatingStar
        className={`fa fa-star ${product.rating >= 3 && "checked"}`}
      />
      <StyledRatingStar
        className={`fa fa-star ${product.rating >= 4 && "checked"}`}
      />
      <StyledRatingStar
        className={`fa fa-star ${product.rating >= 5 && "checked"}`}
      />
    </StyledRatingContainer>
  );
};

export default Rating;

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
