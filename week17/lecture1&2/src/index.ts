import { Client } from "pg";

async function insertData(username: string, email: string, password: string) {
  const client = new Client(
    "postgresql://db1_owner:xxxxxxxxxx@ep-wandering-snowflake-a5nk83ki.us-east-2.aws.neon.tech/db1?sslmode=require"
  );

  try {
    await client.connect(); 
    // Ensure client connection is established
    // Use parameterized query to prevent SQL injection
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
    const values = [username, email, password];
    const res = await client.query(insertQuery, values);
    console.log("Insertion success:", res); // Output insertion result
  } catch (err) {
    console.error("Error during the insertion:", err);
  } finally {
    await client.end(); // Close the client connection
  }
}

// Example usage
insertData("username5", "user5@example.com", "user_password").catch(
  console.error
);
