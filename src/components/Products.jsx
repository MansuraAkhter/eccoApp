import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getInCategory } from "../Redux/actions";
import EachProduct from "./EachProduct";

const Products = () => {
  const dispatch = useDispatch();
  const allProducts = useSelector((state) => state.allProducts);
  const state = useSelector((state) => state);
  const [search, setSearch] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    applySearch();
  }, [search, allProducts]);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const applySearch = () => {
    setFilteredProducts(
      allProducts.filter((product) => {
        return product.title.toLowerCase().includes(search.toLowerCase());
      })
    );
  };

  return (
    <div>
      <div>
        <label htmlFor="category">Choose a Category</label>
        <select
          name="category"
          id="category"
          onChange={(e) => dispatch(getInCategory(e.target.value))}
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <input
          type="text"
          value={search}
          placeholder="search..."
          onChange={handleSearch}
        />
      </div>
      {state.error ? (
        <h2> {state.error}</h2>
      ) : state.loading ? (
        <h2>{state.loading}</h2>
      ) : (
        filteredProducts.map((product) => (
          <EachProduct key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
