import { Client } from "pg";

export async function getSignatureById(id: string, client: Client): Promise<any[] | null> {
    const query = 'SELECT * FROM signatures WHERE id = $1'
    const value = [`${id}`]
    const {rows} = await client.query(query, value)
    
    return rows.length > 0 ? rows : null
}