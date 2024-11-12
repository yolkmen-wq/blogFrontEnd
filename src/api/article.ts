import request from "../utils/request";
export async function getArticleList(pageNum?: number, pageSize?: number) {
  return request.get("/articles", { pageNum, pageSize });
}

export async function getArticleById(id: number) {
  return request.get("/getArticleById", { id });
}

export async function createArticle(data: any) {
  return request.post("/createArticle", data);
}

export async function getTags() {
  return request.post("/getTags");
}
