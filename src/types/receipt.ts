export interface ReceiptItem {
  id: number;
  name: string;
  type: "wonton" | "dip" | "drink";
  quantity: number;
  price: number;
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
