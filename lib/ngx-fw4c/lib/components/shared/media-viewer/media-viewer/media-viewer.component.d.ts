import { OnInit, EventEmitter } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { MediaItem } from '../../models/base.model';
import { ModalService } from '../../modals/modal.service';
export declare class MediaViewerComponent implements OnInit {
    protected modalService: ModalService;
    protected sanitizer: DomSanitizer;
    title: string;
    model: MediaItem;
    modelChange: EventEmitter<MediaItem>;
    removed: EventEmitter<MediaItem>;
    selected: boolean;
    thumbnailHtml: SafeHtml;
    constructor(modalService: ModalService, sanitizer: DomSanitizer);
    ngOnInit(): void;
    viewMedia(): void;
    remove(): void;
}
