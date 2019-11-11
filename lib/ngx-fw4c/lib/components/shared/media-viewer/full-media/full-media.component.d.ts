import { OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
export declare class FullMediaComponent implements OnInit {
    private sanitizer;
    model: MediaItem;
    videoPlayerHtml: SafeHtml;
    constructor(sanitizer: DomSanitizer);
    ngOnInit(): void;
    private generateHtml;
}
