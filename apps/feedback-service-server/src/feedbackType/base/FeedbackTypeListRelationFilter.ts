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
import { FeedbackTypeWhereInput } from "./FeedbackTypeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FeedbackTypeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FeedbackTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedbackTypeWhereInput)
  @IsOptional()
  @Field(() => FeedbackTypeWhereInput, {
    nullable: true,
  })
  every?: FeedbackTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedbackTypeWhereInput)
  @IsOptional()
  @Field(() => FeedbackTypeWhereInput, {
    nullable: true,
  })
  some?: FeedbackTypeWhereInput;

  @ApiProperty({
    required: false,
    type: () => FeedbackTypeWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedbackTypeWhereInput)
  @IsOptional()
  @Field(() => FeedbackTypeWhereInput, {
    nullable: true,
  })
  none?: FeedbackTypeWhereInput;
}
export { FeedbackTypeListRelationFilter as FeedbackTypeListRelationFilter };