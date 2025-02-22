export interface OrderItem {
  id: number;
  type: "wonton" | "dip" | "drink";
  name: string;
  description: string;
  price: number;
  ingredients?: string[];
}

export interface Order {
  id: string;
  timestamp: string;
  items: OrderItem[];
  orderValue: number;
  eta: string;
  state: "waiting" | "processing" | "done";
}

// Request for creating a new order
export interface OrderRequest {
  items: number[]; // Array of item IDs
}

// Response for a single order
export interface OrderResponse {
  order: Order;
}
