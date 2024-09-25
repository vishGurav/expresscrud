const { json } = require("express");
const products=require("../model/product.model")

let addproducts=( req,res)=>{
    let (pid,pname)=req.body
    products.push({pid,pname})
    res.send("product added successfully");

}

let getproducts=(req,res)=>
{
    res.json({"error":false,msg:"products fecthed successfully"},products)
}
let getsingleproducts=(req,res)=>
{
    let{id} =req.params
    let singleproduct=products.find(({id})=>{
            return pid === Number(id)
    })
    if(!singleproduct)
    {
        return res,json({"error":true,msg:`no product found id ${id}`})
    }
    res.json({error:false,msg:"product fecthed successfully",product:singleproduct})
}

let updateproduct=(req,res)=>{
    let {id}=req.params

    let {pname:productName}= req.body

    let singleproduct=products.find(({id})=>{
        return pid === Number(id)
    })
    if(!singleproduct)
    {
         return res,json({"error":true,msg:`no product found id ${id}`})

    }

    let updateproducts=products.map((p)=>{
        if(p.name === singleproduct.pname)
        {
            p.name=productName
        }
        return p
    })

    products=updateproducts

    res.json({error:false,msg:"product update successfully",product:updateproducts})



}

let deleteproduct=(req,res)=>{

    let {id}=req.params
    let singleproduct=products.find(({id})=>{
        return pid === Number(id)
    })
    if(!singleproduct)
    {
         return res,json({"error":true,msg:`no product found id ${id}`})

    }

    let filterdproducts=products.filter((p)=>{
        return (p.id!==Number(id))
    })

    products=filterdproducts;

    res.json({error:false,msg:"product deleted successfully",product:deleteproducts})

}
module.exports={addproducts,getproducts,getsingleproducts,updateproduct,deleteproduct}