import styled from "styled-components";
import { useProductContext } from "./Context";

const Thumbnail = () => {
  const { product } = useProductContext();

  return (
    <StyledThumbnail
      loading="lazy"
      src={product.thumbnail}
      alt={`${product.title} thumbnail`}
    />
  );
};

export default Thumbnail;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: contain;
`;
