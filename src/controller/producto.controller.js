import { json } from "express"
import {pool} from "../db.js"


export const createProduct= async(req, res)=>{
   
    try {
        const{nombre,categoria,precioCliente, descripcion}=req.body
    
    const [rows] = await pool.query('INSERT INTO producto(nombre,categoria,precioCliente,descripcion) VALUES(?,?,?,?)',[nombre,categoria,precioCliente,descripcion])
    
    res.send({
        id:rows.insertId,
        nombre,
        categoria,
        precioCliente,
        descripcion
    })
    
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'   
        })
    }
    }
    

export const getProduct= async(req, res)=>{ 

    try {
        const [resultado]= await pool.query('SELECT * FROM producto')
    res.json(resultado)
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })
    }
}


export const getProductById=async(req, res)=>{ 
    const id=req.params.id
    try {
        const [resultado]= await pool.query('SELECT * FROM producto WHERE id=?',id)
    //console.log(resultado)
    if(resultado.length<=0) return res.status(404).json({
        message:"resultado no encontrado"
    })
    res.json(resultado[0])
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })
    }
}



export const  deleteProduct= async(req, res)=>{ 
    try {
        const id=req.params.id
    
    const [resultado]=await pool.query('DELETE FROM producto WHERE id =?',id)
    console.log(resultado)
    if(resultado.affectedRows<=0) return res.status(404).json({
        message:"product no encontrado "
    })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message:'algo salio mal'
        })
    }
}


export const updateProduct=async(req, res)=>{ 

   try {
    const {id}=req.params
    const{nombre,categoria,precioCliente, descripcion}=req.body

    const [resultado]=await pool.query
    ('UPDATE producto SET nombre = ?,categoria=?,precioCliente=?,descripcion=? WHERE id = ?',[nombre,categoria,precioCliente,descripcion,id])

  if(resultado.affectedRows<=0) return res.status(404).json({
    message:"ningun dato modificado"
  })


  const [consulta]= await pool.query('SELECT * FROM producto WHERE id=?',id)
   
   res.json(consulta[0])
   } catch (error) {
    return res.status(500).json({
        message:'algo salio mal'
    })
    
   }

}


export const updateProductPatch=async(req, res)=>{ 

    try {
        const {id}=req.params
    const{nombre,categoria,precioCliente, descripcion}=req.body
    const [resultado]=await pool.query
    ('UPDATE producto SET nombre = IFNULL(?,nombre),categoria=IFNULL(?,categoria),precioCliente=IFNULL(?,precioCliente),descripcion=IFNULL(?,descripcion) WHERE id = ?',
    [nombre,categoria,precioCliente,descripcion,id])
  if(resultado.affectedRows<=0) return res.status(404).json({
    message:"ningun dato modificado"
  })

  const [consulta]= await pool.query('SELECT * FROM producto WHERE id=?',id)
   res.json(consulta[0])
    } catch (error) {
       return res.status(500).json({
        message:'algo salio mal'
       }) 
    }

}