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
import { BlogArticleWhereInput } from "./BlogArticleWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BlogArticleOrderByInput } from "./BlogArticleOrderByInput";

@ArgsType()
class BlogArticleFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BlogArticleWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BlogArticleWhereInput, { nullable: true })
  @Type(() => BlogArticleWhereInput)
  where?: BlogArticleWhereInput;

  @ApiProperty({
    required: false,
    type: [BlogArticleOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BlogArticleOrderByInput], { nullable: true })
  @Type(() => BlogArticleOrderByInput)
  orderBy?: Array<BlogArticleOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BlogArticleFindManyArgs as BlogArticleFindManyArgs };
