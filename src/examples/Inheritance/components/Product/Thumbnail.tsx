import { FC } from "react";
import styled from "styled-components";

type Props = {
  src: string;
  alt: string;
};

const Thumbnail: FC<Props> = ({ src, alt }) => {
  return <StyledThumbnail loading="lazy" src={src} alt={alt} />;
};

export default Thumbnail;

const StyledThumbnail = styled.img`
  width: 100%;
  height: 180px;
  border-radius: 10px;
  object-fit: contain;
`;
