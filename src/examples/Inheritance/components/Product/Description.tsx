import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Description: FC<Props> = ({ children }) => {
  return <StyledDescription>{children}</StyledDescription>;
};

export default Description;

const StyledDescription = styled.h3`
  font-weight: 400;
  font-size: 14px;
  color: #999999;
`;
