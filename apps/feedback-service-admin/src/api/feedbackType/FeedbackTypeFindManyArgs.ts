import { FeedbackTypeWhereInput } from "./FeedbackTypeWhereInput";
import { FeedbackTypeOrderByInput } from "./FeedbackTypeOrderByInput";

export type FeedbackTypeFindManyArgs = {
  where?: FeedbackTypeWhereInput;
  orderBy?: Array<FeedbackTypeOrderByInput>;
  skip?: number;
  take?: number;
};
