const express=require("express")

const {addproducts,getproducts,getsingleproducts,updateproduct,deleteproduct} =require("../Controller/product.controller")
let router=express.Router();

router.post("/addproducts",addproducts)
router.get("/getproducts",getproducts)
router.get('/getproducts/:id',getsingleproducts)
router.put('/updateproducts/:id',updateproduct)
router.delete("./deleteproducts/:id",deleteproduct)

module.exports=router