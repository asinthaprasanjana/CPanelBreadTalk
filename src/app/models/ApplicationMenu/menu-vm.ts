export class MenuModel {
    id?: number;
    label?: string;
    icon?: string;
    routerLink?: string;
    items?: SubMenuModel[];
}

export class SubMenuModel {
    id?: number;
    label?: string;
    icon?: string;
    routerLink?: string;
    items?: any;
}

export interface AccessList {
    routerLink?: string;
  }
