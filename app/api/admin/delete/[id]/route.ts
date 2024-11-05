import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: Promise<{ id: string }> }) {
  // Await the params to access the id
  const { id } = await params;

  try {
    // Attempt to delete the entry with the specified ID
    const result = await sql`
      DELETE FROM website_briefing WHERE id = ${id};
    `;

    // Check if any rows were deleted
    if (result.rowCount === 0) {
      return NextResponse.json({ message: "No entry found with the given ID" }, { status: 404 });
    }

    return NextResponse.json({ message: "Entry deleted successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting entry:", error);
    return NextResponse.json({ message: "Failed to delete entry", error: (error as Error).message }, { status: 500 });
  }
}
