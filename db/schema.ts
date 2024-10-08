import { sql } from "drizzle-orm";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";

export const foodTable = sqliteTable("food", {
  id: text("id")
    .$defaultFn(() => crypto.randomUUID())
    .notNull()
    .primaryKey(),
  name: text("name").notNull(),
  timeStamp: text("time_stamp").default(sql`CURRENT_TIMESTAMP`),
});
