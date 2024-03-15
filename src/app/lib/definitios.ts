export interface DropdownCategory {
  name: string;
  key: string;
  href: string;
}

export interface MenuItems {
  name: string;
  key:string;
  href: string;
  subitem?: DropdownCategory[];
}