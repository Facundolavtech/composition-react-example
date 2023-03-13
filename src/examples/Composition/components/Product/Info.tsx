import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Info: FC<Props> = ({ children }) => {
  return <>{children}</>;
};

export default Info;
