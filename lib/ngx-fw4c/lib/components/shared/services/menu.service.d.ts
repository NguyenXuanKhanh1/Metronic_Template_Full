import { MenuTab, ExtendedMainMenuGroup, MenuItem } from '../models/base.model';
export declare class MenuService {
    tabs: {
        name: string;
        menu: string;
        subName: string;
        items: ExtendedMainMenuGroup[];
    }[];
    currentSupporterId: string;
    currentSelectedSupplierName: string;
    currentSelectedSupplierId: string;
    init(menuTabs: MenuTab[], callback: () => any, set: (role: string) => MenuItem): void;
    loadMenuItems(menu?: string): any[];
    loadFirstTabItems(key: string): ExtendedMainMenuGroup[];
    loadFirstTab(): {
        name: string;
        menu: string;
        subName: string;
        items: ExtendedMainMenuGroup[];
    };
    getTabs(): {
        name: string;
        menu: string;
        subName: string;
        items: ExtendedMainMenuGroup[];
    }[];
}
