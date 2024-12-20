const express = require('express')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "ananyagargie"

const app = express()
const port = 4000;

app.use(express.json())

const users = []

app.get('/',(req,res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

// Signup route
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Check if the user already exists
    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up"
    });
});

// Signin route
app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].username === username && users[i].password === password) {
            foundUser = users[i];
        }
    }

    if (!foundUser) {
        return res.json({
            error: "Credentials invalid"
        });
    } else {
        
        const token = jwt.sign({
            username
        },JWT_SECRET);
        return res.json({
            token: token
        });
    }
});

function auth(req,res,next){
    const token = req.headers.token;
    const decodedData = jwt.verify(token,JWT_SECRET);

    if(decodedData.username){
        req.username = decodedData.username;
        next();
    }
    else{
        res.json({
            error: "user not found!"
        });
    }
}

app.get('/me',auth,(req,res)=>{
    

    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (req.username == users[i].username) {
            foundUser = users[i];
        }
    }
    
    res.json({
        username : foundUser.username,
        password : foundUser.password
    })
    
})

app.listen(port, () => {
    console.log("Port is running!")
});
