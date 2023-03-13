import styled from "styled-components";
import { useProductContext } from "./Context";

const Title = () => {
  const { product } = useProductContext();

  return <StyledTitle>{product.title}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
  font-weight: 500;
  color: #535353;
  font-size: 18px;
`;
