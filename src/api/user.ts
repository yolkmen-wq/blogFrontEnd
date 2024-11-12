import request from "../utils/request";
export async function register<T>(data: T) {
  return request.post("/users", data);
}
