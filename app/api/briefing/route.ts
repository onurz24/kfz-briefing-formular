import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const {
      url,
      hosting,
      check_hosting,
      backup_old_site,
      pages,
      website_goal,
      booking,
      shop,
      content,
      design,
      location,
      project_scope,
      additional_comments,
    } = data;

    // // Validate required fields
    // if (!url) throw new Error('URL is required');
    // if (!pages) throw new Error('Pages are required');
    // if (!website_goal) throw new Error('Website goal is required');

    await sql`
      INSERT INTO website_briefing (url, hosting, check_hosting, backup_old_site, pages, website_goal, booking, shop, content, design, location, project_scope, additional_comments)
      VALUES (${url}, ${hosting}, ${check_hosting}, ${backup_old_site}, ${pages}, ${website_goal}, ${booking}, ${shop}, ${content}, ${design}, ${location}, ${project_scope}, ${additional_comments});
    `;

    return NextResponse.json({ message: 'Briefing added successfully' }, { status: 201 });
  } catch (error) {
    // Specify the error type
    const errorMessage = (error as Error).message || 'Unknown error';
    console.error('Error adding briefing:', errorMessage);
    return NextResponse.json({ message: 'Error adding briefing', error: errorMessage }, { status: 500 });
  }
}
