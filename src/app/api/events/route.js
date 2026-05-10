import { poolPromise } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query('SELECT * FROM EventEx'); 
        console.log(result.recordset)
        return NextResponse.json(result.recordset);
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}