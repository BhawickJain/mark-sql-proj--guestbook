import { Client } from "pg";

export async function deleteSignatureById(id: number, client:Client) {
    const text = "DELETE FROM signatures WHERE id=$1 RETURNING id, signature, message, time"
    const values = [`${id}`]
    const queryResult = await client.query(text, values)
    return queryResult
}