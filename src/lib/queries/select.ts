import { db } from "../db";
import { usersTable } from "../schema";

export async function getUsers() {
  return await db.select().from(usersTable);
}
