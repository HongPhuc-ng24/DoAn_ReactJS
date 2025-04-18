const Product = require("../models/Product");

class ProductController {
  async getAllProduct(req, res) {
    try {
      const products = await Product.find();
      res.json(products);
    } catch (error) {
      console.error("Get Products Error:", error);
      res.status(500).json({ message: "Server error while getting products" });
    }
  }

  async getProductById(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product)
        return res.status(404).json({ message: "Product not found" });
      res.json(product);
    } catch (error) {
      console.error("Get Product By ID Error:", error);
      res
        .status(500)
        .json({ message: "Server error while getting product by ID" });
    }
  }

  async addProduct(req, res) {
    try {
      const { Title, Cat, Price, Description } = req.body;
      const Img = req.file ? `/uploads/products/${req.file.filename}` : "";

      const product = new Product({ Title, Cat, Price, Description, Img });
      await product.save();

      res.status(201).json(product);
    } catch (error) {
      console.error("Add Product Error:", error);
      res.status(500).json({ message: "Failed to add product" });
    }
  }

  async updateProduct(req, res) {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedProduct)
        return res.status(404).json({ message: "Product not found" });
      res.json(updatedProduct);
    } catch (error) {
      console.error("Update Product Error:", error);
      res.status(500).json({ message: "Failed to update product" });
    }
  }

  async deleteProduct(req, res) {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
      if (!deletedProduct)
        return res.status(404).json({ message: "Product not found" });
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      console.error("Delete Product Error:", error);
      res.status(500).json({ message: "Failed to delete product" });
    }
  }
}

module.exports = new ProductController();
