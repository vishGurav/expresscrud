const express=require("express")

const productRouter= require("./Routes/product.router")

const app =express()
app.use(express.json())

app.use("/api/products",productRouter)

app.listen(4000,()=>console.log("server start port :8000"));