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
      <div className="flex justify-center py-8 mx-96">
        <select
          name="category"
          id="category"
          onChange={(e) => dispatch(getInCategory(e.target.value))}
          className="p-2 px-5 mr-6 rounded-md text-gray-500 focus:outline-none ring-2 ring-gray-400 focus:ring-2 focus:ring-red-300"
        >
          <option value="all">Choose category: All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="jewelery">Jewelery</option>
          <option value="electronics">Electronics</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>

        <div className="relative flex items-center text-gray-400 focus-within:text-gray-600 w-full">
          <svg
            fill="none"
            stroke="currentColor"
            stroke-width="1.5"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-5 h-5 absolute ml-8 pointer-events-none"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            ></path>
          </svg>
          <input
            type="text"
            value={search}
            placeholder="search..."
            onChange={handleSearch}
            className="px-5 pl-10 py-2 ml-6 rounded-md focus:outline-none ring-2 ring-gray-400 focus:ring-2 focus:ring-red-300 w-full"
          />
        </div>
      </div>
      <div className="flex flex-wrap flex-row ml-24">
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
    </div>
  );
};

export default Products;
