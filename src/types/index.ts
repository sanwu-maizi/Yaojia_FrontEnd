export interface Medicine {
  medicine_name: string;
  medicine_id: string;
  amount: number;
  medicine_function: string;
  medicine_price: string;
  department: string;
}

export interface Order {
  medicines: Pick<Medicine, "medicine_name">[];
  order_id: string;
  status: "pending" | "completed" | "refunded" | "cancelled"
  disease_info: string; 
  patient_name: string;
}

export interface User {
  user_id: string;
  user_name: string;
  user_email: string;
  token?: string;
  status: number;
  create_time: Date;
  permission: Role;
}

export enum Role {
  USER,
  ADMIN,
  DOCTOR,
}

export interface FetchUsersParams {
  size: number;
  offset: number;
  token: string
}

export interface FetchCode {
  user_email: string;
}

export interface FetchOrdersParams {
  size: number;
  offset: number;
  token: string
}

export interface FetchMedicinesParams {
  size: number;
  offset: number;
  token: string
}

export interface FetchLoginParams {
  user_email: string;
  user_password: string;
}

export interface FetchRegisterParams {
  user_email: string;
  user_password: string;
  user_name: string;
  code: string;
}

export interface BasicalResponse<T> {
  res: {
    code: number;
    message: string;
    data: T
  }
}

export interface LoginResponse {
  data: {
    token: string;
    user_name: string;
    user_email: string;
    permission: Role;
  }
}

export type LoginApiResponse = BasicalResponse<LoginResponse>;

export interface RegisterResponse {
  res: {
    code: number;
    message: string;
    data: {
      token: string;
      user_name: string;
      user_email: string;
      permission: Role;
    }
  }
}

export type RegisterApiResponse = BasicalResponse<RegisterResponse>;

export interface FetchUsersResponse {
  res: {
    code: number;
    message: string;
    data: {
      userList: User[]
    }
  }
}

export type FetchUsersApiResponse = BasicalResponse<FetchUsersResponse>;

export interface FetchOrdersResponse {
  res: {
    code: number;
    message: string;
    data: {
      orderList: Order[]
    }
  }
}

export type FetchOrdersApiResponse = BasicalResponse<FetchOrdersResponse>;

export interface FetchMedicinesResponse {
  res: {
    code: number;
    message: string;
    data: {
      medicineList: Medicine[]
    }
  }
}
export type FetchMedicinesApiResponse = BasicalResponse<FetchMedicinesResponse>;