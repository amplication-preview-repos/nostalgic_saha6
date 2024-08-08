import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type FeedbackCreateInput = {
  feedbackType?: string | null;
  message?: string | null;
  submittedAt?: Date | null;
  website?: WebsiteWhereUniqueInput | null;
};
