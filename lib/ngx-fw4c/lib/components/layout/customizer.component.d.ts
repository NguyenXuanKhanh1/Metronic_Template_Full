import { DefaultLayoutService } from './layout.service';
export declare class DefaultCustomizerComponent {
    workspaceLayoutService: DefaultLayoutService;
    configOpenRightBar: string;
    constructor(workspaceLayoutService: DefaultLayoutService);
    toggleRightbar(): void;
}
