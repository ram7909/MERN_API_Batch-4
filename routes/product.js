import express from "express";
import { addProducts, deleteProduct, editProduct, getProductById, getProducts } from "../controllers/product.js";

const router = express.Router()

// @method - get
// @route - /api/products/get
// @desc - to get all products
router.get('/get',getProducts)

// @method - get
// @route - /api/products/:id
// @desc - to get product by Id
router.get('/:id',getProductById)

// @method - add
// @route - /api/products/add
// @desc - to add product
router.post('/add',addProducts)

// @method - delete
// @route - /api/products/:id
// @desc - to delete product
router.delete('/:id',deleteProduct)

// @method - edit
// @route - /api/products/:id
// @desc - to edit product
router.put('/:id',editProduct)

export default router;