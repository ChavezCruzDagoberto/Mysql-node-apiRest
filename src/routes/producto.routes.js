import { Router } from "express";
import { getProduct,createProduct,deleteProduct,updateProduct,getProductById,updateProductPatch } from "../controller/producto.controller.js";


const router =Router()

router.get( '/producto',getProduct)
router.get( '/producto/:id',getProductById)

router.put( '/producto/:id',updateProduct)
router.patch( '/producto/:id',updateProductPatch)
router.post( '/producto',createProduct)
router.delete( '/producto/:id',deleteProduct)

export default router