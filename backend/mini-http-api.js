import express from "express"

const app = express()
const PORT=3000;

app.get('/health', (req,res)=>(
    res.status(200).json({
    status: "ok",
    timestamp : new Date().toISOString()
})

))
 app.use( (req,res)=>{
    res.sendStatus(404)
 })

    
app.listen(PORT,()=>{
    console.log("Server listenign on port ${PORT}")
})