import { createId } from "@paralleldrive/cuid2";
import { boolean, pgTable, varchar } from "drizzle-orm/pg-core";

export const todoTable = pgTable("todos", {
	id: varchar("id")
		.primaryKey()
		.$defaultFn(() => createId()),
	title: varchar().notNull(),
	status: boolean().default(false),
});
