import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ProductDetails = ({ products, onUpdate }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => String(p.id) === id);
  const [form, setForm] = useState(product || {});

  if (!product) return <div>Product not found</div>;

  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const save = () => onUpdate({ ...product, ...form, price: Number(form.price) });

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
          <input className="form-control" type="number" name="price" value={form.price ?? ""} onChange={change} />
        </label>
      </div>
      <div>
        <button className="save float-right" onClick={save}>Save</button>
      </div>
    </div>
  );
};

export default ProductDetails;