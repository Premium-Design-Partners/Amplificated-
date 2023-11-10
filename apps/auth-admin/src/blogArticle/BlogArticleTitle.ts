import { BlogArticle as TBlogArticle } from "../api/blogArticle/BlogArticle";

export const BLOGARTICLE_TITLE_FIELD = "id";

export const BlogArticleTitle = (record: TBlogArticle): string => {
  return record.id || String(record.id);
};
