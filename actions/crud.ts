"use server";

import { db } from "@/db/drizzle";
import { foodTable } from "@/db/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function getFood() {
  const food = await db.select().from(foodTable);
  return food;
}

export async function insertFood(form: FormData) {
  const foodName = form.get("food-name");

  if (!foodName) return;

  await db.insert(foodTable).values({ name: foodName as string });
  revalidatePath("/");
}

export async function deleteFood(foodId: string) {
  await db.delete(foodTable).where(eq(foodTable.id, foodId));
  revalidatePath("/");
}
