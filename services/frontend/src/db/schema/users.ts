import { pgTable, text } from "drizzle-orm/pg-core";
import { timestamps } from "./timestamps";

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email"),
  firstName: text("firstName"),
  lastName: text("lastName"),
  imageUrl: text("imageUrl"),
  ...timestamps
});
