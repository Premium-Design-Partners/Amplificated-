import * as graphql from "@nestjs/graphql";
import { BlogArticleResolverBase } from "./base/blogArticle.resolver.base";
import { BlogArticle } from "./base/BlogArticle";
import { BlogArticleService } from "./blogArticle.service";

@graphql.Resolver(() => BlogArticle)
export class BlogArticleResolver extends BlogArticleResolverBase {
  constructor(protected readonly service: BlogArticleService) {
    super(service);
  }
}
