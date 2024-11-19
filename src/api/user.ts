import request from "../utils/request";
export async function registerVisitor<T>(data: T) {
  return request.post("/registerVisitor", data);
}

export async function countVisits() {
  return request.post("/countVisits");
}
