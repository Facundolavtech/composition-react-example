import { FC, ReactNode, createContext, useContext } from "react";
import IProduct from "../../../../models/product.model";

interface IProductContext {
  product: IProduct;
}

type Props = {
  children: ReactNode;
  product: IProduct;
};

const ProductContext = createContext<IProductContext | null>(null);

const ProductContextProvider: FC<Props> = ({ children, product }) => {
  return (
    <ProductContext.Provider value={{ product }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

export const useProductContext = () =>
  useContext(ProductContext) as IProductContext;
