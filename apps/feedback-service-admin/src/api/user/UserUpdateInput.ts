import { InputJsonValue } from "../../types";
import { WebsiteUpdateManyWithoutUsersInput } from "./WebsiteUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
  websites?: WebsiteUpdateManyWithoutUsersInput;
};
