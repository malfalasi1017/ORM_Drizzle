import { json } from "@sveltejs/kit";
import { db } from "$lib/db"; // Adjust if needed
import { usersTable } from "$lib/schema";

export async function GET() {
  try {
    const users = await db.select().from(usersTable);
    return json(users); // Respond with JSON data
  } catch (error) {
    console.error("Error fetching users:", error);
    return json({ error: "Internal Server Error" }, { status: 500 });
  }
}
