import express from "express"

const app = express()
const PORT=3000;

const userlist=[];

app.use(express.json())



app.listen(PORT,()=>{
    console.log(`Server listenign on port ${PORT}`)
});

app.post('/users',(req,res)=>{
    const {name,email}=req.body;
    if(!name || !email){
        return req.status(400).send('Give name and email properly')
    }
    if(!email.includes('@')){
        res.status(400).send("Invalid email")    
    }
    if(userlist.some((user)=>user.email===email)){
        return req.status(400).send('Email already in use')
    }
    const user={
        id:userlist.length+1,
        name,
        email
    }
    userlist.push(user);
    res.status(201).json(user);
})

app.get('/users',(req,res)=>{
    res.status(200).json(userlist);
})

app.get('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const user=userlist.find((user)=>user.id===userId);
    
    if(!user){
        res.status(404).send("user not found")    
    }
    return res.status(200).json(user);

})

app.delete('/users/:id',(req,res)=>{
    const userId=parseInt(req.params.id);
    const userIndx=userlist.findIndex((user)=>user.id===userId);
    userlist.splice(userIndx,1);
    res.sendStatus(204);


})