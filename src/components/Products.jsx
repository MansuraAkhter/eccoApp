import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../Redux/actions";
import EachProduct from "./EachProduct";

const Products = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  const state = useSelector((state) => state);

  return (
    <div>
      {state.error ? (
        <h2> {state.error}</h2>
      ) : state.loading ? (
        <h2>{state.loading}</h2>
      ) : (
        allProducts.map((product) => (
          <EachProduct key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
