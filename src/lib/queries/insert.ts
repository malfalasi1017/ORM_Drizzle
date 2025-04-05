import { db } from "../db";
import { type InsertUser, usersTable } from "../schema";

export async function createUser(data: InsertUser) {
  try {
    console.log("Inserting user:", data);
    await db.insert(usersTable).values(data);
    console.log("User inserted successfully");
  } catch (error) {
    console.error("Insert error:", error);
  }
}
