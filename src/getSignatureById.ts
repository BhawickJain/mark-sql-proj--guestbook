import { Client } from "pg";

export async function getSignatureById(id: string, client: Client): Promise<any[] | null> {
    // sql injection vulnerable code
    const query = `SELECT * FROM signatures WHERE id = ${id}`

    // using the (text, values) postgres SQL library has a 'battle tested'
    // parameter substitution code which detects alterations to the over
    // all query given an input.
    // So it is not a naive substitution!
    const {rows} = await client.query(query)
    
    return rows.length > 0 ? rows : null
}