import { useEffect, useState } from "react";
import IProduct from "../models/product.model";

interface IResponseData {
  limit: number;
  skip: number;
  total: number;
  products: IProduct[];
}

const useProducts = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [products, setProducts] = useState<IProduct[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let unsubscribe = false;

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products", {
          method: "GET",
        });

        const data: IResponseData = await response.json();
        if (!unsubscribe) setProducts(data.products);
      } catch {
        setError("An error has ocurred when trying to get products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();

    return () => {
      unsubscribe = true;
    };
  }, []);

  return {
    products,
    loading,
    error,
  };
};

export default useProducts;
