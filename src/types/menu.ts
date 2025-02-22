export interface MenuItem {
  id: number;
  type: "wonton" | "dip" | "drink";
  name: string;
  description: string;
  price: number;
  ingredients?: string[];
}
