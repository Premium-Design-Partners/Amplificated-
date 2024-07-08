/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, BlogArticle } from "@prisma/client";

export class BlogArticleServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.BlogArticleCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogArticleCountArgs>
  ): Promise<number> {
    return this.prisma.blogArticle.count(args);
  }

  async findMany<T extends Prisma.BlogArticleFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogArticleFindManyArgs>
  ): Promise<BlogArticle[]> {
    return this.prisma.blogArticle.findMany(args);
  }
  async findOne<T extends Prisma.BlogArticleFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogArticleFindUniqueArgs>
  ): Promise<BlogArticle | null> {
    return this.prisma.blogArticle.findUnique(args);
  }
  async create<T extends Prisma.BlogArticleCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogArticleCreateArgs>
  ): Promise<BlogArticle> {
    return this.prisma.blogArticle.create<T>(args);
  }
  async update<T extends Prisma.BlogArticleUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogArticleUpdateArgs>
  ): Promise<BlogArticle> {
    return this.prisma.blogArticle.update<T>(args);
  }
  async delete<T extends Prisma.BlogArticleDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BlogArticleDeleteArgs>
  ): Promise<BlogArticle> {
    return this.prisma.blogArticle.delete(args);
  }
}
