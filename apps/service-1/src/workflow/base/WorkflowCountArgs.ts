/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { WorkflowWhereInput } from "./WorkflowWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class WorkflowCountArgs {
  @ApiProperty({
    required: false,
    type: () => WorkflowWhereInput,
  })
  @Field(() => WorkflowWhereInput, { nullable: true })
  @Type(() => WorkflowWhereInput)
  where?: WorkflowWhereInput;
}

export { WorkflowCountArgs as WorkflowCountArgs };