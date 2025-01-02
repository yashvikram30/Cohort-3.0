// relationships in postgresql
import { Client } from "pg";
import express from "express";

const client = new Client('URL');
const app = express();

app.use(express.json());

app.post("/signup",async(res,req)=>{
    const {username,email,password} = req.body;

    const {city,country,street,pincode} = req.body;

    try {
        await client.connect();

        await client.query(`
            CREATE TABLE IF NOT EXISTS users(
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(250) UNIQUE NOT NULL,
            password VARCHAR(255) UNIQUE NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMEST
            );    
        `);

        await client.query(`
            CREATED TABLE IF NOT EXISTS addresses(
            id  SERIAL PRIMARY KEY,
            user_id INTEGER NOT NULL,
            city VARCHAR(100)   NOT NULL,
            country VARCHAR(100) NOT NULL,
            street VARCHAR(255) NOT NULL,
            pincode VARCHAR(20)    
            FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
            );
        `);

        // here the id of the original users table is returned and we will now form a relationship with the address table
        const insertQuery = `INSERT INTO users(username, email, password) VALUES ($1, $2, $3) RETURNING id;`;
        const insertResponse = await client.query(insertQuery, [username, email, password]);
        const userId = insertResponse.rows[0].id;

        // Inserting address details into the 'addresses' table and associating them with the user ID
        const addressQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5);`;
        const addressResponse = await client.query(addressQuery, [city, country, street, pincode, userId]);
        
        // Sending a success response to the client
        res.json({
            message: "You have signed up successfully",
        });

    } catch (error) {
        // Logging any errors to the console
        console.log(error);  
        
        // Sending an error response to the client
        res.json({
            message: "Error while signing up",
        });
    }
});


