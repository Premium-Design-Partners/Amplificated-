import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BlogArticleServiceBase } from "./base/blogArticle.service.base";

@Injectable()
export class BlogArticleService extends BlogArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
