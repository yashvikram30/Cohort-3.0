const express = require('express');
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ananyagarg"
const zod = require('zod');

const emailSchema = zod.string().email();
const passwordSchema = zod.string().min(8);

const app = express();
app.use(express.json());

function signJWT(username,password){
    const usernameResponse = emailSchema.safeParse(username);
    const passwordResponse = passwordSchema.safeParse(password);
    if(!usernameResponse.success && !passwordResponse.success){
        return null;
    }

    const token = jwt.sign({
        username
    },JWT_SECRET)
}

function decodeJWT(token){
    const decoded = jwt.decode(token);
    if(decoded){
        return true;
    }
    else {
        return false;
    }
}

app.post('/signup', async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({
        username : username
    },JWT_SECRET);

    res.json({
        token : token
    });
});

app.listen(port,()=>{
    console.log("Server is running!");
})