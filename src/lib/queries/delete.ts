import { db } from "../db";
import { usersTable } from "../schema";
import { eq } from "drizzle-orm";

export async function deleteUser(id: number) {
  try {
    await db.delete(usersTable).where(eq(usersTable.id, id)); // ✅ Use eq()

    console.log("User deleted successfully");
  } catch (error) {
    console.error("Delete error:", error);
  }
}
