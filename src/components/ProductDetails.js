import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);
  // price input starts empty, so typing sets the new price directly
  const [form, setForm] = useState({ ...product, price: "" });

  useEffect(() => {
    if (product) setForm({ ...product, price: "" });
  }, [id]);

  if (!product) return <div>Product not found</div>;

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const save = () => {
    const price = form.price === "" ? product.price : Number(form.price);
    if (Number.isNaN(price)) return;
    onUpdate({ ...product, ...form, price });
    setForm((f) => ({ ...f, price: "" }));
  };

  return (
    <div className="details">
      <div>
        <button className="btn" onClick={() => navigate("/")}>Back</button>
      </div>
      <div className="body">
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>

        <label>Name
          <input className="form-input" name="name" value={form.name || ""} onChange={change} />
        </label>
        <label>Description
          <input className="form-input" name="description" value={form.description || ""} onChange={change} />
        </label>
        <label>Image URL
          <input className="form-input" name="image" value={form.image || ""} onChange={change} />
        </label>
        <label>Price
          <input
            className="form-control"
            type="number"
            name="price"
            placeholder={`Current: ${product.price}`}
            value={form.price}
            onChange={change}
          />
        </label>
      </div>
      <div>
        <button className="save float-right" onClick={save}>Save</button>
      </div>
    </div>
  );
};

export default ProductDetails;