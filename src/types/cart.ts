import { MenuItem } from "./menu.ts";

export interface CartItem extends MenuItem {
  quantity: number;
}
