/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { trigger, state, style, AUTO_STYLE, transition, animate } from '@angular/animations';
export class CardComponent {
    constructor() {
        this.classHeader = false;
        this.cardToggle = 'expanded';
        this.cardClose = 'open';
        this.loadCard = false;
        this.isCardToggled = false;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleCard(event) {
        this.cardToggle = this.cardToggle === 'collapsed' ? 'expanded' : 'collapsed';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    closeCard(event) {
        this.cardClose = this.cardClose === 'closed' ? 'open' : 'closed';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    fullScreen(event) {
        this.fullCard = this.fullCard === 'full-card' ? '' : 'full-card';
        this.fullCardIcon = this.fullCardIcon === 'icofont-resize' ? '' : 'icofont-resize';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    cardRefresh(event) {
        this.loadCard = true;
        this.cardLoad = 'card-load';
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.cardLoad = '';
            this.loadCard = false;
        }), 3000);
    }
}
CardComponent.decorators = [
    { type: Component, args: [{
                selector: 'katana-card',
                template: "<div class=\"card {{ fullCard }} {{ cardLoad }}\" [@cardClose]=\"cardClose\" [ngClass]=\"cardClass\">\r\n  <div class=\"card-header\" *ngIf=\"title\">\r\n    <h5>{{ title }}</h5>\r\n    <span *ngIf=\"!classHeader\">{{ headerContent }}</span>\r\n    <span *ngIf=\"classHeader\">\r\n      <ng-content select=\".code-header\"></ng-content>\r\n    </span>\r\n    <div class=\"card-header-right\">\r\n      <ul class=\"list-unstyled card-option\">\r\n        <li *ngIf=\"!isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-left\"></i></li>\r\n        <li *ngIf=\"isCardToggled\" (click)=\"this.isCardToggled = !this.isCardToggled\"><i class=\"icofont icofont-simple-right\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-maximize {{ fullCardIcon }} full-card\" (click)=\"fullScreen($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-minus minimize-card\" cardToggleEvent (click)=\"toggleCard($event)\"></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-refresh reload-card\" (click)=\"cardRefresh($event)\" ></i></li>\r\n        <li *ngIf=\"isCardToggled\"><i class=\"icofont icofont-error close-card\" (click)=\"closeCard($event)\"></i></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n\r\n  <div [@cardToggle]=\"cardToggle\">\r\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\r\n      <ng-content></ng-content>\r\n    </div>\r\n  </div>\r\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"icofont icofont-refresh rotate-refresh\"></i></div>\r\n</div>\r\n",
                animations: [trigger('cardToggle', [
                        state('collapsed, void', style({
                            overflow: 'hidden',
                            height: '0px',
                        })),
                        state('expanded', style({
                            height: AUTO_STYLE,
                        })),
                        transition('collapsed <=> expanded', [
                            animate('400ms ease-in-out')
                        ])
                    ]), trigger('cardClose', [
                        state('open', style({
                            opacity: 1
                        })),
                        state('closed', style({
                            opacity: 0,
                            display: 'none'
                        })),
                        transition('open <=> closed', animate('400ms')),
                    ])],
                styles: [".card{position:relative;display:flex;flex-direction:column;min-width:0;word-wrap:break-word;background-color:#fff;background-clip:border-box}.card>hr{margin-right:0;margin-left:0}.card>.list-group:first-child .list-group-item:first-child{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card>.list-group:last-child .list-group-item:last-child{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-body{flex:1 1 auto;padding:1rem}.card-title{margin-bottom:.75rem}.card-subtitle{margin-top:-.375rem;margin-bottom:0}.card-text:last-child{margin-bottom:0}.card-link:hover{text-decoration:none}.card-link+.card-link{margin-left:1rem}.card-header{padding:.75rem 1rem;margin-bottom:0;background-color:rgba(0,0,0,.03);border-bottom:1px solid rgba(0,0,0,.125)}.card-header:first-child{border-radius:calc(.25rem - 1px) calc(.25rem - 1px) 0 0}.card-header+.list-group .list-group-item:first-child{border-top:0}.card-footer{padding:.75rem 1rem;background-color:rgba(0,0,0,.03);border-top:1px solid rgba(0,0,0,.125)}.card-footer:last-child{border-radius:0 0 calc(.25rem - 1px) calc(.25rem - 1px)}.card-header-tabs{margin-right:-.5rem;margin-bottom:-.75rem;margin-left:-.5rem;border-bottom:0}.card-header-pills{margin-right:-.5rem;margin-left:-.5rem}.card-img-overlay{position:absolute;top:0;right:0;bottom:0;left:0;padding:1.25rem}.card-img{width:100%;border-radius:calc(.25rem - 1px)}.card-img-top{width:100%;border-top-left-radius:calc(.25rem - 1px);border-top-right-radius:calc(.25rem - 1px)}.card-img-bottom{width:100%;border-bottom-right-radius:calc(.25rem - 1px);border-bottom-left-radius:calc(.25rem - 1px)}.card-deck{display:flex;flex-direction:column}.card-deck .card{margin-bottom:7.5px}@media (min-width:576px){.card-deck{flex-flow:row wrap;margin-right:-7.5px;margin-left:-7.5px}.card-deck .card{display:flex;flex:1 0 0%;flex-direction:column;margin-right:7.5px;margin-bottom:0;margin-left:7.5px}}.card-group{display:flex;flex-direction:column}.card-group>.card{margin-bottom:7.5px}@media (min-width:576px){.card-group{flex-flow:row wrap}.card-group>.card{flex:1 0 0%;margin-bottom:0}.card-group>.card+.card{margin-left:0;border-left:0}.card-group>.card:first-child{border-top-right-radius:0;border-bottom-right-radius:0}.card-group>.card:first-child .card-header,.card-group>.card:first-child .card-img-top{border-top-right-radius:0}.card-group>.card:first-child .card-footer,.card-group>.card:first-child .card-img-bottom{border-bottom-right-radius:0}.card-group>.card:last-child{border-top-left-radius:0;border-bottom-left-radius:0}.card-group>.card:last-child .card-header,.card-group>.card:last-child .card-img-top{border-top-left-radius:0}.card-group>.card:last-child .card-footer,.card-group>.card:last-child .card-img-bottom{border-bottom-left-radius:0}.card-group>.card:only-child{border-radius:.25rem}.card-group>.card:only-child .card-header,.card-group>.card:only-child .card-img-top{border-top-left-radius:.25rem;border-top-right-radius:.25rem}.card-group>.card:only-child .card-footer,.card-group>.card:only-child .card-img-bottom{border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem}.card-group>.card:not(:first-child):not(:last-child):not(:only-child),.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-footer,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-header,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-bottom,.card-group>.card:not(:first-child):not(:last-child):not(:only-child) .card-img-top{border-radius:0}.card-columns{-moz-column-count:3;column-count:3;-moz-column-gap:1.25rem;column-gap:1.25rem}.card-columns .card{display:inline-block;width:100%}}.card-columns .card{margin-bottom:.75rem}"]
            }] }
];
CardComponent.propDecorators = {
    headerContent: [{ type: Input }],
    title: [{ type: Input }],
    blockClass: [{ type: Input }],
    cardClass: [{ type: Input }],
    classHeader: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    CardComponent.prototype.headerContent;
    /** @type {?} */
    CardComponent.prototype.title;
    /** @type {?} */
    CardComponent.prototype.blockClass;
    /** @type {?} */
    CardComponent.prototype.cardClass;
    /** @type {?} */
    CardComponent.prototype.classHeader;
    /** @type {?} */
    CardComponent.prototype.cardToggle;
    /** @type {?} */
    CardComponent.prototype.cardClose;
    /** @type {?} */
    CardComponent.prototype.fullCard;
    /** @type {?} */
    CardComponent.prototype.fullCardIcon;
    /** @type {?} */
    CardComponent.prototype.loadCard;
    /** @type {?} */
    CardComponent.prototype.isCardToggled;
    /** @type {?} */
    CardComponent.prototype.cardLoad;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtZnc0Yy8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnRzL3NoYXJlZC9jYXJkL2NhcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNqRCxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQWlDN0YsTUFBTSxPQUFPLGFBQWE7SUEvQjFCO1FBb0NrQixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUM3QixlQUFVLEdBQUcsVUFBVSxDQUFDO1FBQ3hCLGNBQVMsR0FBRyxNQUFNLENBQUM7UUFHbkIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQkFBYSxHQUFHLEtBQUssQ0FBQztJQXdCL0IsQ0FBQzs7Ozs7SUFyQlEsVUFBVSxDQUFDLEtBQVU7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUM7SUFDL0UsQ0FBQzs7Ozs7SUFFTSxTQUFTLENBQUMsS0FBVTtRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQztJQUNuRSxDQUFDOzs7OztJQUVNLFVBQVUsQ0FBQyxLQUFVO1FBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQztJQUNyRixDQUFDOzs7OztJQUVNLFdBQVcsQ0FBQyxLQUFVO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsV0FBVyxDQUFDO1FBQzVCLFVBQVU7OztRQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHNsREFBb0M7Z0JBRXBDLFVBQVUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxZQUFZLEVBQUU7d0JBQ2pDLEtBQUssQ0FBQyxpQkFBaUIsRUFDckIsS0FBSyxDQUFDOzRCQUNKLFFBQVEsRUFBRSxRQUFROzRCQUNsQixNQUFNLEVBQUUsS0FBSzt5QkFDZCxDQUFDLENBQ0g7d0JBQ0QsS0FBSyxDQUFDLFVBQVUsRUFDZCxLQUFLLENBQUM7NEJBQ0osTUFBTSxFQUFFLFVBQVU7eUJBQ25CLENBQUMsQ0FDSDt3QkFDRCxVQUFVLENBQUMsd0JBQXdCLEVBQUU7NEJBQ25DLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQzt5QkFDN0IsQ0FBQztxQkFDSCxDQUFDLEVBQUUsT0FBTyxDQUFDLFdBQVcsRUFBRTt3QkFDdkIsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUM7NEJBQ2xCLE9BQU8sRUFBRSxDQUFDO3lCQUNYLENBQUMsQ0FBQzt3QkFDSCxLQUFLLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQzs0QkFDcEIsT0FBTyxFQUFFLENBQUM7NEJBQ1YsT0FBTyxFQUFFLE1BQU07eUJBQ2hCLENBQUMsQ0FBQzt3QkFDSCxVQUFVLENBQUMsaUJBQWlCLEVBQUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUNoRCxDQUFDLENBQUM7O2FBQ0o7Ozs0QkFHRSxLQUFLO29CQUNMLEtBQUs7eUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzBCQUNMLEtBQUs7Ozs7SUFKTixzQ0FBc0M7O0lBQ3RDLDhCQUE4Qjs7SUFDOUIsbUNBQW1DOztJQUNuQyxrQ0FBa0M7O0lBQ2xDLG9DQUFvQzs7SUFDcEMsbUNBQStCOztJQUMvQixrQ0FBMEI7O0lBQzFCLGlDQUF3Qjs7SUFDeEIscUNBQTRCOztJQUM1QixpQ0FBd0I7O0lBQ3hCLHNDQUE2Qjs7SUFDN0IsaUNBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmlnZ2VyLCBzdGF0ZSwgc3R5bGUsIEFVVE9fU1RZTEUsIHRyYW5zaXRpb24sIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAna2F0YW5hLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgYW5pbWF0aW9uczogW3RyaWdnZXIoJ2NhcmRUb2dnbGUnLCBbXHJcbiAgICBzdGF0ZSgnY29sbGFwc2VkLCB2b2lkJyxcclxuICAgICAgc3R5bGUoe1xyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICBoZWlnaHQ6ICcwcHgnLFxyXG4gICAgICB9KVxyXG4gICAgKSxcclxuICAgIHN0YXRlKCdleHBhbmRlZCcsXHJcbiAgICAgIHN0eWxlKHtcclxuICAgICAgICBoZWlnaHQ6IEFVVE9fU1RZTEUsXHJcbiAgICAgIH0pXHJcbiAgICApLFxyXG4gICAgdHJhbnNpdGlvbignY29sbGFwc2VkIDw9PiBleHBhbmRlZCcsIFtcclxuICAgICAgYW5pbWF0ZSgnNDAwbXMgZWFzZS1pbi1vdXQnKVxyXG4gICAgXSlcclxuICBdKSwgdHJpZ2dlcignY2FyZENsb3NlJywgW1xyXG4gICAgc3RhdGUoJ29wZW4nLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDFcclxuICAgIH0pKSxcclxuICAgIHN0YXRlKCdjbG9zZWQnLCBzdHlsZSh7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xyXG4gICAgfSkpLFxyXG4gICAgdHJhbnNpdGlvbignb3BlbiA8PT4gY2xvc2VkJywgYW5pbWF0ZSgnNDAwbXMnKSksXHJcbiAgXSldLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhcmRDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHB1YmxpYyBoZWFkZXJDb250ZW50OiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIHRpdGxlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGJsb2NrQ2xhc3M6IHN0cmluZztcclxuICBASW5wdXQoKSBwdWJsaWMgY2FyZENsYXNzOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgcHVibGljIGNsYXNzSGVhZGVyID0gZmFsc2U7XHJcbiAgcHVibGljIGNhcmRUb2dnbGUgPSAnZXhwYW5kZWQnO1xyXG4gIHB1YmxpYyBjYXJkQ2xvc2UgPSAnb3Blbic7XHJcbiAgcHVibGljIGZ1bGxDYXJkOiBzdHJpbmc7XHJcbiAgcHVibGljIGZ1bGxDYXJkSWNvbjogc3RyaW5nO1xyXG4gIHB1YmxpYyBsb2FkQ2FyZCA9IGZhbHNlO1xyXG4gIHB1YmxpYyBpc0NhcmRUb2dnbGVkID0gZmFsc2U7XHJcbiAgcHVibGljIGNhcmRMb2FkOiBzdHJpbmc7XHJcblxyXG4gIHB1YmxpYyB0b2dnbGVDYXJkKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuY2FyZFRvZ2dsZSA9IHRoaXMuY2FyZFRvZ2dsZSA9PT0gJ2NvbGxhcHNlZCcgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgY2xvc2VDYXJkKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuY2FyZENsb3NlID0gdGhpcy5jYXJkQ2xvc2UgPT09ICdjbG9zZWQnID8gJ29wZW4nIDogJ2Nsb3NlZCc7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZnVsbFNjcmVlbihldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmZ1bGxDYXJkID0gdGhpcy5mdWxsQ2FyZCA9PT0gJ2Z1bGwtY2FyZCcgPyAnJyA6ICdmdWxsLWNhcmQnO1xyXG4gICAgdGhpcy5mdWxsQ2FyZEljb24gPSB0aGlzLmZ1bGxDYXJkSWNvbiA9PT0gJ2ljb2ZvbnQtcmVzaXplJyA/ICcnIDogJ2ljb2ZvbnQtcmVzaXplJztcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjYXJkUmVmcmVzaChldmVudDogYW55KSB7XHJcbiAgICB0aGlzLmxvYWRDYXJkID0gdHJ1ZTtcclxuICAgIHRoaXMuY2FyZExvYWQgPSAnY2FyZC1sb2FkJztcclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNhcmRMb2FkID0gJyc7XHJcbiAgICAgIHRoaXMubG9hZENhcmQgPSBmYWxzZTtcclxuICAgIH0sIDMwMDApO1xyXG4gIH1cclxufVxyXG4iXX0=