import { Observable } from 'rxjs';
import { SettingService } from './setting.service';
import { Breadcrumb, MenuTab } from '../models/base.model';
export declare class ActionService {
    private _settingService;
    constructor(_settingService: SettingService);
    executeAsync(callback: () => any, timeout?: number): void;
    scrollTop(): void;
    isMobile(): boolean;
    verify<T>(callback: Observable<T>): Observable<T>;
    changeItem(item: any, menuTabs: MenuTab[], callback?: (breadCrumbs: Breadcrumb[]) => any): Breadcrumb[];
    retrieveParent(state: string, menuTabs: MenuTab[]): Breadcrumb;
    retrieveChild(state: string, menuTabs: MenuTab[]): Breadcrumb;
    retrieveStateName(state: string, menuTabs: MenuTab[]): string;
}
