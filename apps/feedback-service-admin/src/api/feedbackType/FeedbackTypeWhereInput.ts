import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type FeedbackTypeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  screenshot?: JsonFilter;
  typeField?: StringNullableFilter;
};
