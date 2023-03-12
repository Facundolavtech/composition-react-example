import { FC } from "react";

type Props = {
  error: string;
};

const Error: FC<Props> = ({ error }) => {
  return <p className="error__message">{error}</p>;
};

export default Error;
