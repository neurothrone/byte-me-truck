export interface ReceiptItem {
  id: number;
  name: string;
  type: "wonton" | "dip" | "drink";
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
