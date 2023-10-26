import express from "express"

import ProductRoutes from "./routes/producto.routes.js"
import IndexRoutes from "./routes/index.routes.js"



const app=express()


app.use(express.json())

app.use(IndexRoutes)

app.use('/api',ProductRoutes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:'API NOT FOUND'
    })
})

export default app