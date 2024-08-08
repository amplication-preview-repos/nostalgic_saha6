import { Feedback } from "../feedback/Feedback";
import { User } from "../user/User";

export type Website = {
  createdAt: Date;
  feedbacks?: Array<Feedback>;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
