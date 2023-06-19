import { SortOrder } from "../../util/SortOrder";

export type BlogArticleOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
