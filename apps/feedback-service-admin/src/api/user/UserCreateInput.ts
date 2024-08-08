import { InputJsonValue } from "../../types";
import { WebsiteCreateNestedManyWithoutUsersInput } from "./WebsiteCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
  websites?: WebsiteCreateNestedManyWithoutUsersInput;
};
