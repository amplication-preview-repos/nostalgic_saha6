/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FeedbackCreateNestedManyWithoutWebsitesInput } from "./FeedbackCreateNestedManyWithoutWebsitesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  MaxLength,
} from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class WebsiteCreateInput {
  @ApiProperty({
    required: false,
    type: () => FeedbackCreateNestedManyWithoutWebsitesInput,
  })
  @ValidateNested()
  @Type(() => FeedbackCreateNestedManyWithoutWebsitesInput)
  @IsOptional()
  @Field(() => FeedbackCreateNestedManyWithoutWebsitesInput, {
    nullable: true,
  })
  feedbacks?: FeedbackCreateNestedManyWithoutWebsitesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { WebsiteCreateInput as WebsiteCreateInput };
