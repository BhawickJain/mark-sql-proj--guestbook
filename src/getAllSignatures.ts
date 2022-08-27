import { Client } from "pg";

export async  function getAllSignatures(client: Client) {
    const query = "SELECT * FROM signatures"
    const queryResult = await client.query(query)
    return queryResult.rows
}