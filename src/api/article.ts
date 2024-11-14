import request from "../utils/request";
export async function getArticleList(
  pageNum: number = 1,
  pageSize: number = 999,
  keyword: string = ""
) {
  return request.get("/articles", { pageNum, pageSize, keyword });
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

export async function createLink(data: any) {
  return request.post("/createLink", data);
}

export async function getLinks() {
  return request.post("/getLinks");
}
