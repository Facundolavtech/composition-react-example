import { FC, ReactNode } from "react";
import styled from "styled-components";

type Props = {
  children: ReactNode;
};

const Title: FC<Props> = ({ children }) => {
  return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
  font-weight: 500;
  color: #535353;
  font-size: 18px;
`;
