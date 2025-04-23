import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "./components/Input";
import { fetchProducts, addProduct } from "./api/products"; 

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();


  const loadProducts = async () => {
    setLoading(true);
    const productList = await fetchProducts();
    setProducts(productList);
    setLoading(false);
  };

  useEffect(() => {
    loadProducts(); 
  }, []);

  
  const onSubmit = async (data) => {
    const success = await addProduct(data);
    if (success) {
      alert("Product added successfully!");
      reset();
      loadProducts(); 
    }
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "3rem auto",
        padding: "2rem",
        borderRadius: "12px",
        boxShadow: "0 0 20px rgba(0,0,0,0.05)",
        backgroundColor: "#fff",
        fontFamily: "sans-serif",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333" }}>Add Product</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: "2rem" }}>
        <Input
          label="Product Name"
          name="name"
          register={register}
          required={true}
          error={errors.name}
        />
        <Input
          label="Price"
          name="price"
          type="number"
          register={register}
          required={true}
          error={errors.price}
        />
        <button
          type="submit"
          style={{
            padding: ".6rem 1.2rem",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#007bff",
            color: "white",
            cursor: "pointer",
            marginTop: "1rem",
          }}
        >
          Add Product
        </button>
      </form>

      <h2 style={{ marginBottom: "1rem", color: "#333" }}>Product List</h2>
      {loading ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <ul style={{ padding: 0, listStyle: "none" }}>
          {products.map((p) => (
            <li
              key={p._id}
              style={{
                border: "1px solid #eee",
                padding: ".8rem 1rem",
                marginBottom: ".5rem",
                borderRadius: "6px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <strong>{p.name}</strong> — ${p.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
