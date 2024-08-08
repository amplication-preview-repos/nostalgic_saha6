import { FeedbackCreateNestedManyWithoutWebsitesInput } from "./FeedbackCreateNestedManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteCreateInput = {
  feedbacks?: FeedbackCreateNestedManyWithoutWebsitesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
