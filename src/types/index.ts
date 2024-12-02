export interface Medicine {
  medicine_name: string;
  medicine_id: string;
  medicine_function: string;
  medicine_price: string;
  medicine_department: string;
}

export interface Order {
  medicine_list: Medicine[];
  order_id: string;
  status: "pending" | "completed" | "refunded" | "cancelled"
  disease_info: string; 
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

export interface LoginParams {
  user_email: string;
  password: string;
}