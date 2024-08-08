import { FeedbackType as TFeedbackType } from "../api/feedbackType/FeedbackType";

export const FEEDBACKTYPE_TITLE_FIELD = "typeField";

export const FeedbackTypeTitle = (record: TFeedbackType): string => {
  return record.typeField?.toString() || String(record.id);
};
