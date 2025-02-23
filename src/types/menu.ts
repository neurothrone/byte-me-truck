import { MenuItemType } from "./shared.ts";

export interface MenuItem {
  id: number;
  type: MenuItemType;
  name: string;
  description: string;
  price: number;
  ingredients?: string[];
}
