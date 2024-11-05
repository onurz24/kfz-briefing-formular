import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const result = await sql`SELECT * FROM website_briefing ORDER BY created_at DESC;`;
    return NextResponse.json({ data: result.rows });
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
  }
}
