import request from "../utils/request";

export function createComment(data: any) {
  return request.post("/createComment", data);
}

export function getComments(params: any) {
  return request.get("/getComments", params);
}

export function toggleCommentLike(data: any) {
  return request.post("/toggleCommentLike", data);
}

export function imageUpload(data: FormData) {
  return request.post("/uploadImage", data);
}
