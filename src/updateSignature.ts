import { Client } from "pg";

export async function updateSignature(id: number, name: string, message: string, client: Client) {
    // TODO make the name, message optional
    const text = "UPDATE signatures SET id=$1, signature=$2, message=$3 WHERE id=$1 RETURNING id, signature, message, time"
    const values = [`${id}`, `${name}`, `${message}`]
    const queryResult = await client.query(text, values)
    return queryResult
}