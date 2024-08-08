import { Feedback as TFeedback } from "../api/feedback/Feedback";

export const FEEDBACK_TITLE_FIELD = "feedbackType";

export const FeedbackTitle = (record: TFeedback): string => {
  return record.feedbackType?.toString() || String(record.id);
};
