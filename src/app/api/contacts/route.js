import { poolPromise, sql } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { name, email, enquiry, message } = await request.json();

        const pool = await poolPromise;
        await pool.request()
            .input('name', sql.NVarChar, name)
            .input('email', sql.NVarChar, email)
            .input('enquiryId', sql.Int, parseInt(enquiry))
            .input('message', sql.NVarChar, message)
            .query(`
                INSERT INTO Enquiry (MuseumId,FullName, Email, EnquiryTypeId, MessageText)
                VALUES (1, @name, @email, @enquiryId, @message)
            `);

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 201 });
    } catch (error) {
        console.error("Database Error:", error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}