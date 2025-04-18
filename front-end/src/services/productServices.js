// services/productService.js
import * as httpRequest from "../utils/httpRequest";

const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export const getAllProducts = async () => {
  try {
    const response = await httpRequest.get("api/products/all", authHeader());
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error getAllProducts", error);
    return [];
  }
};

export const getProductById = async (id) => {
  try {
    const response = await httpRequest.get(`api/products/${id}`, authHeader());
    return response;
  } catch (error) {
    console.error("Error getProductById", error);
    return null;
  }
};

export const createProduct = async (productData) => {
  try {
    const formData = new FormData();
    for (let key in productData) {
      formData.append(key, productData[key]);
    }
    const response = await httpRequest.post(
      "api/products",
      formData,
      authHeader()
    );
    return response;
  } catch (error) {
    console.error("Error createProduct", error);
    return null;
  }
};

export const updateProduct = async (id, productData) => {
  try {
    const response = await httpRequest.put(
      `api/products/${id}`,
      productData,
      authHeader()
    );
    return response;
  } catch (error) {
    console.error("Error updateProduct", error);
    return null;
  }
};

export const deleteProduct = async (id) => {
  try {
    const response = await httpRequest.del(`api/products/${id}`, authHeader());
    return response;
  } catch (error) {
    console.error("Error deleteProduct", error);
    return null;
  }
};
