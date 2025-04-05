import { db } from "../db";
import { usersTable } from "../schema";
import { eq } from "drizzle-orm";

export async function updateUser(
  id: number,
  newName: string,
  newAge: number,
  newEmail: string
) {
  try {
    await db
      .update(usersTable)
      .set({ name: newName, age: newAge, email: newEmail })
      .where(eq(usersTable.id, id)); // ✅ Use eq()

    console.log("User updated successfully");
  } catch (error) {
    console.error("Update error:", error);
  }
}
