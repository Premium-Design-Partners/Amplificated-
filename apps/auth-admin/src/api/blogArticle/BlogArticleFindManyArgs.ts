import { BlogArticleWhereInput } from "./BlogArticleWhereInput";
import { BlogArticleOrderByInput } from "./BlogArticleOrderByInput";

export type BlogArticleFindManyArgs = {
  where?: BlogArticleWhereInput;
  orderBy?: Array<BlogArticleOrderByInput>;
  skip?: number;
  take?: number;
};
