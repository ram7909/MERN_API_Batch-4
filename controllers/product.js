import { Product } from "../Models/Product.js";

// Get All Product
export const getProducts = async (req, res) => {
    try {
        let product = await Product.find();
        res.json({ message: "all product", product, success: true })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }

}

// Add Product
export const addProducts = async (req, res) => {
    const { title, description, price, qty, img,category } = req.body;
    try {
        let product = await Product.create({ title, description, price, qty, img ,category})
        res.json({
            message: "product add succesfully",
            product,
            success: true
        })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }
}


// Get Product By ID
export const getProductById = async (req, res) => {
    const id = req.params.id
    try {
        let product = await Product.find({ _id: id });
        res.json({ message: "Product Details", product, success: true })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }
}

// Delete Product By Id
export const deleteProduct = async (req, res) => {
    const id = req.params.id
    try {
        let product = await Product.findByIdAndDelete(id);
        if (!product) return res.json({ message: "Invalid Id", success: false })
        res.json({ message: " Your Product Has Been Deleted", product, success: true })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }
}

// Edit Product By Id
export const editProduct = async (req, res) => {
    const id = req.params.id
    try {
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true });
        if (!product) return res.json({ message: "Invalid Id", success: false })
        res.json({ message: " Your Product Has Been Updated", product, success: true })
    }
    catch (error) {
        res.json({ message: "Internal Server Error", success: false })
    }
}