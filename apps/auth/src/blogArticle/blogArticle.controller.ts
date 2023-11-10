import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BlogArticleService } from "./blogArticle.service";
import { BlogArticleControllerBase } from "./base/blogArticle.controller.base";

@swagger.ApiTags("blogArticles")
@common.Controller("blogArticles")
export class BlogArticleController extends BlogArticleControllerBase {
  constructor(protected readonly service: BlogArticleService) {
    super(service);
  }
}
