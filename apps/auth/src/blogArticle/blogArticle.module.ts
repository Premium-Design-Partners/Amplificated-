import { Module } from "@nestjs/common";
import { BlogArticleModuleBase } from "./base/blogArticle.module.base";
import { BlogArticleService } from "./blogArticle.service";
import { BlogArticleController } from "./blogArticle.controller";
import { BlogArticleResolver } from "./blogArticle.resolver";

@Module({
  imports: [BlogArticleModuleBase],
  controllers: [BlogArticleController],
  providers: [BlogArticleService, BlogArticleResolver],
  exports: [BlogArticleService],
})
export class BlogArticleModule {}
