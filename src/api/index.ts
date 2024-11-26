import { MOCK_MEDICINE_LIST, MOCK_ORDER_LIST, MOCK_USER_LIST } from "../mock";
import service from "./request";
import { Medicine } from "../types/index";
const IS_MOCK = true;

// 获取药品列表 example 请以该函数及请求系列处理为模板
export async function getMedicineList(): Promise<Medicine[]> {
  if (IS_MOCK) {
    return Promise.resolve(MOCK_MEDICINE_LIST);
  }
  return service.get("/allMedicine");
}

// TODO 处理待确认，参数类型待确认, 不要使用any类型
 
// TODO 获取用户列表
export function getUserList(params: any) {
  if (IS_MOCK) {
    return MOCK_USER_LIST;
  }
  return service.get("/allUser", { params: params });
}
 
// TODO 获取订单列表
export function getOrderList(params: any) {
  if (IS_MOCK) {
    return MOCK_ORDER_LIST;
  }
  return service.get("/allOrders");
}

// TODO
export function getVerificationCode(params: any) {
  return service.get("/user/code");
}

// TODO
export function register(params: any) {
  return service.post("/user/register");
}

// TODO
export function login(params: any) {
  return service.post("/user/login");
}