import { poolPromise, sql } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = await request.json();

        const pool = await poolPromise;
        
        const checkResult = await pool.request()
            .input('email', sql.NVarChar, email)
            .query('SELECT * FROM NewsletterSubscriber WHERE Email = @email');

        if (checkResult.recordset.length > 0) {
            return NextResponse.json({ message: 'You are already subscribed!' }, { status: 200 });
        }

        await pool.request()
            .input('email', sql.NVarChar, email)
            .query('INSERT INTO NewsletterSubscriber (Email, MuseumId) VALUES (@email, 1)');

        return NextResponse.json({ message: 'Subscribed successfully!' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}