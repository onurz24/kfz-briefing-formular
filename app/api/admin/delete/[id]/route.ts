import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  try {
    const result = await sql`DELETE FROM website_briefing WHERE id = ${id};`;

    if (result.rowCount === 0) {
      return NextResponse.json({ message: "Entry not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Entry deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting entry:", error);
    return NextResponse.json({ message: "Error deleting entry" }, { status: 500 });
  }
}
