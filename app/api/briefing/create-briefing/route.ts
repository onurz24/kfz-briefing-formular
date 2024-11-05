import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // SQL command to create the website_briefing table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS website_briefing (
        id SERIAL PRIMARY KEY,
        url VARCHAR(255) NOT NULL,
        hosting VARCHAR(255),
        check_hosting BOOLEAN DEFAULT FALSE,
        backup_old_site BOOLEAN DEFAULT FALSE,
        pages TEXT,
        website_goal TEXT NOT NULL,
        booking BOOLEAN DEFAULT FALSE,
        shop BOOLEAN DEFAULT FALSE,
        content TEXT,
        design TEXT,
        location TEXT,
        project_scope TEXT,
        additional_comments TEXT,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
    `;

    // Execute the create table command
    await sql`${createTableQuery}`;

    return NextResponse.json({ message: 'Tabelle website_briefing erfolgreich erstellt oder bereits vorhanden.' }, { status: 201 });
  } catch (error) {
    const errorMessage = (error as Error).message || 'Ein unbekannter Fehler ist aufgetreten';
    console.error('Fehler beim Erstellen der Tabelle:', errorMessage);
    return NextResponse.json({ message: 'Fehler beim Erstellen der Tabelle', error: errorMessage }, { status: 500 });
  }
}
