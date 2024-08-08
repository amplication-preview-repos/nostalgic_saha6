import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { WebsiteWhereUniqueInput } from "../website/WebsiteWhereUniqueInput";

export type FeedbackWhereInput = {
  feedbackType?: StringNullableFilter;
  id?: StringFilter;
  message?: StringNullableFilter;
  submittedAt?: DateTimeNullableFilter;
  website?: WebsiteWhereUniqueInput;
};
