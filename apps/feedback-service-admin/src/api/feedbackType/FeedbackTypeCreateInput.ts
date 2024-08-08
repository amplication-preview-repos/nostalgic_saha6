import { InputJsonValue } from "../../types";

export type FeedbackTypeCreateInput = {
  description?: string | null;
  screenshot?: InputJsonValue;
  typeField?: string | null;
};
