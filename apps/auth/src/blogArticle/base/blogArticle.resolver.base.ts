/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { DeleteBlogArticleArgs } from "./DeleteBlogArticleArgs";
import { BlogArticleCountArgs } from "./BlogArticleCountArgs";
import { BlogArticleFindManyArgs } from "./BlogArticleFindManyArgs";
import { BlogArticleFindUniqueArgs } from "./BlogArticleFindUniqueArgs";
import { BlogArticle } from "./BlogArticle";
import { BlogArticleService } from "../blogArticle.service";
@graphql.Resolver(() => BlogArticle)
export class BlogArticleResolverBase {
  constructor(protected readonly service: BlogArticleService) {}

  async _blogArticlesMeta(
    @graphql.Args() args: BlogArticleCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BlogArticle])
  async blogArticles(
    @graphql.Args() args: BlogArticleFindManyArgs
  ): Promise<BlogArticle[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => BlogArticle, { nullable: true })
  async blogArticle(
    @graphql.Args() args: BlogArticleFindUniqueArgs
  ): Promise<BlogArticle | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BlogArticle)
  async deleteBlogArticle(
    @graphql.Args() args: DeleteBlogArticleArgs
  ): Promise<BlogArticle | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
