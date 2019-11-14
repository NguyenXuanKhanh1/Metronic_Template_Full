import { PanelHeaderDirective } from './panel-header.directive';
export declare class PanelComponent {
    panelHeader: PanelHeaderDirective;
    title: string;
    icon: string;
    includeBorder: boolean;
    expand: boolean;
    disabled: boolean;
    toggle(): void;
}
