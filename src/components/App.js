import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./../styles/App.css";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";
import AdminPanel from "./AdminPanel";

const initialProducts = [
  { id: 1, name: "Samsung Galaxy S8 64GB Red", price: 16303, description: "5.8 inch display, 64GB storage", image: "https://via.placeholder.com/80x120?text=S8" },
  { id: 2, name: "Samsung Galaxy S9 64GB Black", price: 20888, description: "5.8 inch display, 64GB storage", image: "https://via.placeholder.com/80x120?text=S9" },
  { id: 3, name: "Samsung Galaxy S8+ 64GB Black", price: 18701, description: "6.2 inch display, 64GB storage", image: "https://via.placeholder.com/80x120?text=S8%2B" },
  { id: 4, name: "Samsung Galaxy S9+ 64GB Black", price: 49999, description: "6.2 inch display, 64GB storage", image: "https://via.placeholder.com/80x120?text=S9%2B" },
  { id: 5, name: "Samsung Galaxy Note 9 6/128GB Midnight Black", price: 29768, description: "6.4 inch display, S Pen", image: "https://via.placeholder.com/80x120?text=Note9" },
  { id: 6, name: "Samsung Galaxy Note 8 64GB Black", price: 22171, description: "6.3 inch display, S Pen", image: "https://via.placeholder.com/80x120?text=Note8" },
  { id: 7, name: "Samsung Galaxy S10 128GB Prism White", price: 54999, description: "6.1 inch display, 128GB storage", image: "https://via.placeholder.com/80x120?text=S10" },
  { id: 8, name: "Samsung Galaxy A50 64GB Blue", price: 19999, description: "6.4 inch display, triple camera", image: "https://via.placeholder.com/80x120?text=A50" },
];

const App = () => {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (p) => setProducts((prev) => [...prev, p]);
  const updateProduct = (p) =>
    setProducts((prev) => prev.map((x) => (x.id === p.id ? p : x)));
  const deleteProduct = (id) =>
    setProducts((prev) => prev.filter((x) => x.id !== id));

  return (
    <div>
      {/* Do not remove the main div */}
      <BrowserRouter>
        <div className="navbar">
          <div><Link to="/">Home</Link></div>
          <div><Link to="/admin">Admin</Link></div>
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<ProductList products={products} />} />
            <Route
              path="/products/:id"
              element={<ProductDetails products={products} onUpdate={updateProduct} />}
            />
            <Route
              path="/admin"
              element={
                <AdminPanel products={products} onAdd={addProduct} onDelete={deleteProduct} />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;