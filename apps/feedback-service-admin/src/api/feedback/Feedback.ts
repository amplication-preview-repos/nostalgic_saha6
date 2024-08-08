import { Website } from "../website/Website";

export type Feedback = {
  createdAt: Date;
  feedbackType: string | null;
  id: string;
  message: string | null;
  submittedAt: Date | null;
  updatedAt: Date;
  website?: Website | null;
};
