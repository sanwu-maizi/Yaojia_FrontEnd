import { MOCK_MEDICINE_LIST, MOCK_ORDER_LIST, MOCK_USER_LIST } from "../mock";
import service from "./request";
import { FetchCode, FetchMedicinesParams, FetchOrdersParams, FetchUsersParams, LoginParams, Medicine, Order, User } from "../types/index";
const IS_MOCK = true;

// 获取药品列表 example 请以该函数及请求系列处理为模板
export async function getMedicineList(params: FetchMedicinesParams): Promise<Medicine[]> {
  if (IS_MOCK) {
    return Promise.resolve(MOCK_MEDICINE_LIST);
  }
  return service.get(`/allMedicine?size=${params?.size}&offset=${params?.offset}&token=${params?.token}`);
}

// TODO 处理待确认，参数类型待确认, 不要使用any类型
 
// TODO 获取用户列表
export function getUserList(params: FetchUsersParams): Promise<User[]> {
  if (IS_MOCK) {
    return Promise.resolve(MOCK_USER_LIST);
  }
  return service.get("/getUserList", { params: params });
}
 
// TODO 获取订单列表
export function getOrderList(params: FetchOrdersParams): Promise<Order[]> {
  if (IS_MOCK) {
    return Promise.resolve(MOCK_ORDER_LIST);
  }
  return service.get("/getOrderList");
}

// TODO
export function getVerificationCode(params: FetchCode) {
  return service.get("/user/code");
}

// TODO
export function register(params: any) {
  return service.post("/user/register");
}

// TODO
export function login(params: LoginParams) {
  return service.post("/user/login");
}