import { JsonValue } from "type-fest";
import { Website } from "../website/Website";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
  websites?: Array<Website>;
};
