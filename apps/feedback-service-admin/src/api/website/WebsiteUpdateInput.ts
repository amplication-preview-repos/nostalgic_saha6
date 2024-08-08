import { FeedbackUpdateManyWithoutWebsitesInput } from "./FeedbackUpdateManyWithoutWebsitesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WebsiteUpdateInput = {
  feedbacks?: FeedbackUpdateManyWithoutWebsitesInput;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
