import { Client } from "pg";

export async function createSignature(name: string, message: string | undefined, client:Client) {
   if (message === undefined) {message = ""}
   const query = 'INSERT INTO signatures(signature, message) VALUES($1, $2) RETURNING id, signature, message, time' 
   const values = [name, message]
   const queryResult = await client.query(query, values)
   console.log(queryResult)
   
   return (await queryResult).rows
}