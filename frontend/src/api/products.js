

// Function to fetch products from the server
export const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      return data.data.products || [];
    } catch (err) {
      console.error("Error fetching products:", err);
      return [];
    }
  };
  
  // Function to add a new product to the server
  export const addProduct = async (productData) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(productData),
      });
  
      if (!res.ok) {
        throw new Error("Failed to add product");
      }
  
      return true; // Successfully added
    } catch (err) {
      console.error("Error adding product:", err);
      return false; // Failed to add
    }
  };
  