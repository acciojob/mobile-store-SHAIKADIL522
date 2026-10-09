import React, { useState } from "react";
import { Link } from "react-router-dom";

const empty = { name: "", description: "", image: "", price: "" };

const AdminPanel = ({ products, onAdd, onDelete }) => {
  const [form, setForm] = useState(empty);
  const change = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const add = () => {
    if (!form.name.trim() || form.price === "") return;
    onAdd({ ...form, id: Date.now(), price: Number(form.price) });
    setForm(empty);
  };

  return (
    <div className="admin">
      <div className="add-form">
        <input className="form-control" name="name" placeholder="Name" value={form.name} onChange={change} />
        <input className="form-control" name="description" placeholder="Description" value={form.description} onChange={change} />
        <input className="form-control" name="image" placeholder="Image URL" value={form.image} onChange={change} />
        <input className="form-control" type="number" name="price" placeholder="Price" value={form.price} onChange={change} />
        <button type="button" onClick={add}>Add</button>
      </div>

      <ul className="list list-group">
        {products.map((p) => (
          <li key={p.id} className="list-group-item">
            <Link to={`/products/${p.id}`}>{p.name}</Link>
            <span
              role="button"
              tabIndex={0}
              className="float-right del"
              onClick={() => onDelete(p.id)}
            >
              Delete
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;