/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlogArticleService } from "../blogArticle.service";
import { BlogArticleCreateInput } from "./BlogArticleCreateInput";
import { BlogArticleWhereInput } from "./BlogArticleWhereInput";
import { BlogArticleWhereUniqueInput } from "./BlogArticleWhereUniqueInput";
import { BlogArticleFindManyArgs } from "./BlogArticleFindManyArgs";
import { BlogArticleUpdateInput } from "./BlogArticleUpdateInput";
import { BlogArticle } from "./BlogArticle";

export class BlogArticleControllerBase {
  constructor(protected readonly service: BlogArticleService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlogArticle })
  async create(
    @common.Body() data: BlogArticleCreateInput
  ): Promise<BlogArticle> {
    return await this.service.create({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlogArticle] })
  @ApiNestedQuery(BlogArticleFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<BlogArticle[]> {
    const args = plainToClass(BlogArticleFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlogArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async findOne(
    @common.Param() params: BlogArticleWhereUniqueInput
  ): Promise<BlogArticle | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BlogArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async update(
    @common.Param() params: BlogArticleWhereUniqueInput,
    @common.Body() data: BlogArticleUpdateInput
  ): Promise<BlogArticle | null> {
    try {
      return await this.service.update({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BlogArticle })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async delete(
    @common.Param() params: BlogArticleWhereUniqueInput
  ): Promise<BlogArticle | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
