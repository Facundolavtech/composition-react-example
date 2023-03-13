import styled from "styled-components";
import { useProductContext } from "./Context";

const Description = () => {
  const { product } = useProductContext();

  return <StyledDescription>{product.description}</StyledDescription>;
};

export default Description;

const StyledDescription = styled.h3`
  font-weight: 400;
  font-size: 14px;
  color: #999999;
`;
