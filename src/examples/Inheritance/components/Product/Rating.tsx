import { FC } from "react";
import styled from "styled-components";

type Props = {
  rating: number;
};

const Rating: FC<Props> = ({ rating }) => {
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
