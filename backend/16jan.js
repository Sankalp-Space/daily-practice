import http from "http"
const PORT=3000;
const HOST ='localhost';

const notes=[{ "id": 1, "title": "string", "body": "string", "createdAt": "ISO string" }]
const server=http.createServer((req,res)=>{
    if(url=='notes' && method=='GET'){
        res.writeHead(200,{'Content-Type':'application/json'})
        return res.end(JSON.stringify(notes))
    }
    if(url=='notes' && method=='POST'){
        let body='';
        req.on('data',(chunk)=>{
            body+=chunk;
        })
        req.on('end',()=>{
            
        })
    }
})