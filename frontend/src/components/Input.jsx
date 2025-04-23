import React from "react";

function Input({ label, name, type = "text", register, required, error }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label style={{ display: "block", marginBottom: ".5rem" }}>{label}</label>
      <input
        type={type}
        {...register(name, { required })}
        style={{
          width: "100%",
          padding: ".5rem",
          border: error ? "1px solid red" : "1px solid #ccc",
          borderRadius: "4px",
        }}
      />
      {error && (
        <p style={{ color: "red", fontSize: "0.9rem" }}>{label} is required</p>
      )}
    </div>
  );
}

export default Input;
