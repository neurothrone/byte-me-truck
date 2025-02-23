import { MenuItemType } from "./shared.ts";

export interface ReceiptItem {
  id: number;
  name: string;
  type: MenuItemType;
  quantity: number;
  price: number; // This is the total cost, the API already calculates price * quantity
}

export interface Receipt {
  id: string;
  items: ReceiptItem[];
  orderValue: number;
  timestamp: string;
}

export interface ReceiptResponse {
  receipt: Receipt;
}
