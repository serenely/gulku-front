export const fetchProductsData = async () => {
    try {
      const response = await fetch('http://localhost:4000/products');
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
  
  export const fetchProductData = async (_id: string) => {
    try {
      const response = await fetch(`http://localhost:4000/product/:${_id}`);
      
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  };
