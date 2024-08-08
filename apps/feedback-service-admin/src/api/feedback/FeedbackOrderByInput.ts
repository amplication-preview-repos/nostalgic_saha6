import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  createdAt?: SortOrder;
  feedbackType?: SortOrder;
  id?: SortOrder;
  message?: SortOrder;
  submittedAt?: SortOrder;
  updatedAt?: SortOrder;
  websiteId?: SortOrder;
};
