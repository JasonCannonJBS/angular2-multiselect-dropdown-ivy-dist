import { Directive, Output, EventEmitter, HostListener, Input } from '@angular/core';
import * as i0 from "@angular/core";
export class ClickOutsideDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.clickOutside = new EventEmitter();
    }
    onClick(event, targetElement) {
        if (!targetElement) {
            return;
        }
        const clickedInside = this._elementRef.nativeElement.contains(targetElement);
        if (!clickedInside) {
            this.clickOutside.emit(event);
        }
    }
}
ClickOutsideDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ClickOutsideDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ClickOutsideDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: ClickOutsideDirective, selector: "[clickOutside]", outputs: { clickOutside: "clickOutside" }, host: { listeners: { "document:pointerdown": "onClick($event,$event.target)", "document:touchstart": "onClick($event,$event.target)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ClickOutsideDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[clickOutside]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { clickOutside: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['document:pointerdown', ['$event', '$event.target']]
            }, {
                type: HostListener,
                args: ['document:touchstart', ['$event', '$event.target']]
            }] } });
export class ScrollDirective {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.scroll = new EventEmitter();
    }
    onClick(event, targetElement) {
        this.scroll.emit(event);
    }
}
ScrollDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ScrollDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
ScrollDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: ScrollDirective, selector: "[scroll]", outputs: { scroll: "scroll" }, host: { listeners: { "scroll": "onClick($event)" } }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ScrollDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[scroll]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { scroll: [{
                type: Output
            }], onClick: [{
                type: HostListener,
                args: ['scroll', ['$event']]
            }] } });
export class styleDirective {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.style.top = this.styleVal;
    }
    ngOnChanges() {
        this.el.nativeElement.style.top = this.styleVal;
    }
}
styleDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: styleDirective, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
styleDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: styleDirective, selector: "[styleProp]", inputs: { styleVal: ["styleProp", "styleVal"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: styleDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[styleProp]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { styleVal: [{
                type: Input,
                args: ['styleProp']
            }] } });
export class setPosition {
    constructor(el) {
        this.el = el;
    }
    ngOnInit() {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    }
    ngOnChanges() {
        if (this.height) {
            this.el.nativeElement.style.bottom = parseInt(this.height + 15 + "") + 'px';
        }
    }
}
setPosition.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: setPosition, deps: [{ token: i0.ElementRef }], target: i0.ɵɵFactoryTarget.Directive });
setPosition.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.2.10", type: setPosition, selector: "[setPosition]", inputs: { height: ["setPosition", "height"] }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: setPosition, decorators: [{
            type: Directive,
            args: [{
                    selector: '[setPosition]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }]; }, propDecorators: { height: [{
                type: Input,
                args: ['setPosition']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpY2tPdXRzaWRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhcjItbXVsdGlzZWxlY3QtZHJvcGRvd24tbGliL3NyYy9saWIvY2xpY2tPdXRzaWRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsTUFBTSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEgsTUFBTSxPQUFPLHFCQUFxQjtJQUM5QixZQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUlwQyxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFjLENBQUM7SUFIckQsQ0FBQztJQU9NLE9BQU8sQ0FBQyxLQUFpQixFQUFFLGFBQTBCO1FBQ3hELElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsT0FBTztTQUNWO1FBRUQsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzdFLElBQUksQ0FBQyxhQUFhLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDakM7SUFDTCxDQUFDOzttSEFsQlEscUJBQXFCO3VHQUFyQixxQkFBcUI7NEZBQXJCLHFCQUFxQjtrQkFIakMsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsZ0JBQWdCO2lCQUM3QjtpR0FNVSxZQUFZO3NCQURsQixNQUFNO2dCQUtBLE9BQU87c0JBRmIsWUFBWTt1QkFBQyxzQkFBc0IsRUFBRSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUM7O3NCQUNoRSxZQUFZO3VCQUFDLHFCQUFxQixFQUFFLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQzs7QUFnQnBFLE1BQU0sT0FBTyxlQUFlO0lBQ3hCLFlBQW9CLFdBQXVCO1FBQXZCLGdCQUFXLEdBQVgsV0FBVyxDQUFZO1FBSXBDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYyxDQUFDO0lBSC9DLENBQUM7SUFNTSxPQUFPLENBQUMsS0FBaUIsRUFBRSxhQUEwQjtRQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QixDQUFDOzs2R0FWUSxlQUFlO2lHQUFmLGVBQWU7NEZBQWYsZUFBZTtrQkFIM0IsU0FBUzttQkFBQztvQkFDUCxRQUFRLEVBQUUsVUFBVTtpQkFDdkI7aUdBTVUsTUFBTTtzQkFEWixNQUFNO2dCQUlBLE9BQU87c0JBRGIsWUFBWTt1QkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0FBUXRDLE1BQU0sT0FBTyxjQUFjO0lBRXZCLFlBQW9CLEVBQWM7UUFBZCxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBRWxDLENBQUM7SUFJRCxRQUFRO1FBRUosSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BELENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3BELENBQUM7OzRHQWRRLGNBQWM7Z0dBQWQsY0FBYzs0RkFBZCxjQUFjO2tCQUgxQixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxhQUFhO2lCQUMxQjtpR0FPdUIsUUFBUTtzQkFBM0IsS0FBSzt1QkFBQyxXQUFXOztBQWV0QixNQUFNLE9BQU8sV0FBVztJQUlwQixZQUFtQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtJQUVqQyxDQUFDO0lBQ0QsUUFBUTtRQUNKLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNiLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUMvRTtJQUNMLENBQUM7SUFDRCxXQUFXO1FBQ1AsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQy9FO0lBQ0wsQ0FBQzs7eUdBaEJRLFdBQVc7NkZBQVgsV0FBVzs0RkFBWCxXQUFXO2tCQUh2QixTQUFTO21CQUFDO29CQUNQLFFBQVEsRUFBRSxlQUFlO2lCQUM1QjtpR0FHeUIsTUFBTTtzQkFBM0IsS0FBSzt1QkFBQyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbY2xpY2tPdXRzaWRlXSdcbn0pXG5leHBvcnQgY2xhc3MgQ2xpY2tPdXRzaWRlRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIGNsaWNrT3V0c2lkZSA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnBvaW50ZXJkb3duJywgWyckZXZlbnQnLCAnJGV2ZW50LnRhcmdldCddKVxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OnRvdWNoc3RhcnQnLCBbJyRldmVudCcsICckZXZlbnQudGFyZ2V0J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGlmICghdGFyZ2V0RWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2xpY2tlZEluc2lkZSA9IHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgaWYgKCFjbGlja2VkSW5zaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT3V0c2lkZS5lbWl0KGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQERpcmVjdGl2ZSh7XG4gICAgc2VsZWN0b3I6ICdbc2Nyb2xsXSdcbn0pXG5leHBvcnQgY2xhc3MgU2Nyb2xsRGlyZWN0aXZlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9lbGVtZW50UmVmOiBFbGVtZW50UmVmKSB7XG4gICAgfVxuXG4gICAgQE91dHB1dCgpXG4gICAgcHVibGljIHNjcm9sbCA9IG5ldyBFdmVudEVtaXR0ZXI8TW91c2VFdmVudD4oKTtcblxuICAgIEBIb3N0TGlzdGVuZXIoJ3Njcm9sbCcsIFsnJGV2ZW50J10pXG4gICAgcHVibGljIG9uQ2xpY2soZXZlbnQ6IE1vdXNlRXZlbnQsIHRhcmdldEVsZW1lbnQ6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMuc2Nyb2xsLmVtaXQoZXZlbnQpO1xuICAgIH1cbn1cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3N0eWxlUHJvcF0nXG59KVxuZXhwb3J0IGNsYXNzIHN0eWxlRGlyZWN0aXZlIHtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cblxuICAgIEBJbnB1dCgnc3R5bGVQcm9wJykgc3R5bGVWYWw6IG51bWJlcjtcblxuICAgIG5nT25Jbml0KCkge1xuXG4gICAgICAgIHRoaXMuZWwubmF0aXZlRWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLnN0eWxlVmFsO1xuICAgIH1cbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5lbC5uYXRpdmVFbGVtZW50LnN0eWxlLnRvcCA9IHRoaXMuc3R5bGVWYWw7XG4gICAgfVxufVxuXG5cbkBEaXJlY3RpdmUoe1xuICAgIHNlbGVjdG9yOiAnW3NldFBvc2l0aW9uXSdcbn0pXG5leHBvcnQgY2xhc3Mgc2V0UG9zaXRpb24gaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XG5cbiAgICBASW5wdXQoJ3NldFBvc2l0aW9uJykgaGVpZ2h0OiBudW1iZXI7XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgZWw6IEVsZW1lbnRSZWYpIHtcblxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gcGFyc2VJbnQodGhpcy5oZWlnaHQgKyAxNSArIFwiXCIpICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuYm90dG9tID0gcGFyc2VJbnQodGhpcy5oZWlnaHQgKyAxNSArIFwiXCIpICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==