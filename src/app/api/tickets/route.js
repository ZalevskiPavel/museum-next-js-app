import { poolPromise, sql } from '../../../../lib/db';
import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { EventId, VisitorName, VisitorEmail, TotalPrice, CreditCard, ticketSerialNumber } = await request.json();
        const pool = await poolPromise;

        await pool.request()
            .input('EventId', sql.Int, EventId)
            .input('VisitorName', sql.NVarChar, VisitorName)
            .input('VisitorEmail', sql.NVarChar, VisitorEmail)
            .input('TotalPrice', sql.Float, TotalPrice)
            .input('CreditCard', sql.NVarChar, CreditCard)
            .input('TicketSeria', sql.NVarChar, ticketSerialNumber)

            .query(`
                INSERT INTO Ticket (EventId, VisitorName, VisitorEmail, TotalPrice, CreditCard, TicketSeria)
                VALUES (@EventId, @VisitorName, @VisitorEmail, @TotalPrice, @CreditCard, @TicketSeria)
            `);
                console.log("AllGOOD")
        return NextResponse.json({ message: 'Ticket booked successfully' }, { status: 201 });

    } catch (error) {
        console.error('Database Error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}