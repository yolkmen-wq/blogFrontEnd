import request from "../utils/request";

export async function login<T>(data: T){
  return request.post("/login", data,{
    headers:{
      'Content-Type': "application/x-www-form-urlencoded"
    }
  });
}

export async function register<T>(data: T) {
  return request.post("/register", data);
}

export async function registerVisitor<T>(data: T) {
  return request.post("/registerVisitor", data);
}

export async function countVisits() {
  return request.post("/countVisits");
}

export async function getCaptcha(){
  return request.post("/getCaptcha");
}