import { JsonValue } from "type-fest";

export type FeedbackType = {
  createdAt: Date;
  description: string | null;
  id: string;
  screenshot: JsonValue;
  typeField: string | null;
  updatedAt: Date;
};
