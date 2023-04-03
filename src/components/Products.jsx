import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllProducts } from "../Redux/actions";
import EachProduct from "./EachProduct";

const Products = () => {
  const dispatch = useDispatch();
  const categories = [];

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.allProducts);
  const state = useSelector((state) => state);

  return (
    <div>
      <div>
        <label htmlFor="cstegory">Choose a Category</label>
        <select name="category" id="category">
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
      </div>
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
