import http from "http"
const PORT=3000;
const HOST ='localhost';

const serverHandler=(req,res)=>{
    const {method,url}=req;
    if(url=='/health' && method=='GET'){
        const payload=JSON.stringify({
            status:'ok',
            timestamp:new Date().toISOString()
        })
        res.writeHead(200,{'Content-Type':'application/json'})
        return res.end(payload)

    } 
    else if(url=='/echo' && method=='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            res.writeHead(200,{'Content-Type':'application/json'})
        
    }

)

const server=http.createServer(serverHandler)
server.listen(PORT,HOST,()=>{
    console.log(`Server listenign on port ${PORT}`)
})