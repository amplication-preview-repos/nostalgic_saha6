import { SortOrder } from "../../util/SortOrder";

export type FeedbackTypeOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  screenshot?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
