import { Component, TemplateRef, ContentChild, ViewEncapsulation, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
export class Item {
    constructor() {
    }
}
Item.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Item, deps: [], target: i0.ɵɵFactoryTarget.Component });
Item.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: Item, selector: "c-item", queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Item, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-item',
                    template: ``
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { template: [{
                type: ContentChild,
                args: [TemplateRef, { static: true }]
            }] } });
export class Badge {
    constructor() {
    }
}
Badge.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Badge, deps: [], target: i0.ɵɵFactoryTarget.Component });
Badge.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: Badge, selector: "c-badge", queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Badge, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-badge',
                    template: ``
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { template: [{
                type: ContentChild,
                args: [TemplateRef, { static: true }]
            }] } });
export class Search {
    constructor() {
    }
}
Search.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Search, deps: [], target: i0.ɵɵFactoryTarget.Component });
Search.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: Search, selector: "c-search", queries: [{ propertyName: "template", first: true, predicate: TemplateRef, descendants: true, static: true }], ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: Search, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-search',
                    template: ``
                }]
        }], ctorParameters: function () { return []; }, propDecorators: { template: [{
                type: ContentChild,
                args: [TemplateRef, { static: true }]
            }] } });
export class TemplateRenderer {
    constructor(viewContainer) {
        this.viewContainer = viewContainer;
    }
    ngOnInit() {
        this.view = this.viewContainer.createEmbeddedView(this.data.template, {
            '\$implicit': this.data,
            'item': this.item
        });
    }
    ngOnDestroy() {
        this.view.destroy();
    }
}
TemplateRenderer.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TemplateRenderer, deps: [{ token: i0.ViewContainerRef }], target: i0.ɵɵFactoryTarget.Component });
TemplateRenderer.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: TemplateRenderer, selector: "c-templateRenderer", inputs: { data: "data", item: "item" }, ngImport: i0, template: ``, isInline: true });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: TemplateRenderer, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-templateRenderer',
                    template: ``
                }]
        }], ctorParameters: function () { return [{ type: i0.ViewContainerRef }]; }, propDecorators: { data: [{
                type: Input
            }], item: [{
                type: Input
            }] } });
export class CIcon {
}
CIcon.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CIcon, deps: [], target: i0.ɵɵFactoryTarget.Component });
CIcon.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "15.2.10", type: CIcon, selector: "c-icon", inputs: { name: "name" }, ngImport: i0, template: `<svg *ngIf="name == 'remove'" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                        <g>
                            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                        </g>
                    </svg>
            <svg *ngIf="name == 'angle-down'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x31_0_34_">
		<g>
			<path d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782
				c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296
				c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"/>
		</g>
	</g>
</g>
</svg>
<svg *ngIf="name == 'angle-up'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x39__30_">
		<g>
			<path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
				L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
				c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'search'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 615.52 615.52" style="enable-background:new 0 0 615.52 615.52;"
	 xml:space="preserve">
<g>
	<g>
		<g id="Search__x28_and_thou_shall_find_x29_">
			<g>
				<path d="M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0
					C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777
					l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291
					C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174
					c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88
					s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"/>
			</g>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'clear'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve">
<g>
	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0
		C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778
		c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828
		c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828
		l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
</g>
</svg>`, isInline: true, dependencies: [{ kind: "directive", type: i1.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }], encapsulation: i0.ViewEncapsulation.None });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: CIcon, decorators: [{
            type: Component,
            args: [{
                    selector: 'c-icon',
                    template: `<svg *ngIf="name == 'remove'" width="100%" height="100%" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 47.971 47.971" style="enable-background:new 0 0 47.971 47.971;" xml:space="preserve">
                        <g>
                            <path d="M28.228,23.986L47.092,5.122c1.172-1.171,1.172-3.071,0-4.242c-1.172-1.172-3.07-1.172-4.242,0L23.986,19.744L5.121,0.88
                                c-1.172-1.172-3.07-1.172-4.242,0c-1.172,1.171-1.172,3.071,0,4.242l18.865,18.864L0.879,42.85c-1.172,1.171-1.172,3.071,0,4.242
                                C1.465,47.677,2.233,47.97,3,47.97s1.535-0.293,2.121-0.879l18.865-18.864L42.85,47.091c0.586,0.586,1.354,0.879,2.121,0.879
                                s1.535-0.293,2.121-0.879c1.172-1.171,1.172-3.071,0-4.242L28.228,23.986z"/>
                        </g>
                    </svg>
            <svg *ngIf="name == 'angle-down'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x31_0_34_">
		<g>
			<path d="M604.501,134.782c-9.999-10.05-26.222-10.05-36.221,0L306.014,422.558L43.721,134.782
				c-9.999-10.05-26.223-10.05-36.222,0s-9.999,26.35,0,36.399l279.103,306.241c5.331,5.357,12.422,7.652,19.386,7.296
				c6.988,0.356,14.055-1.939,19.386-7.296l279.128-306.268C614.5,161.106,614.5,144.832,604.501,134.782z"/>
		</g>
	</g>
</g>
</svg>
<svg *ngIf="name == 'angle-up'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 612 612" style="enable-background:new 0 0 612 612;" xml:space="preserve">
<g>
	<g id="_x39__30_">
		<g>
			<path d="M604.501,440.509L325.398,134.956c-5.331-5.357-12.423-7.627-19.386-7.27c-6.989-0.357-14.056,1.913-19.387,7.27
				L7.499,440.509c-9.999,10.024-9.999,26.298,0,36.323s26.223,10.024,36.222,0l262.293-287.164L568.28,476.832
				c9.999,10.024,26.222,10.024,36.221,0C614.5,466.809,614.5,450.534,604.501,440.509z"/>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'search'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="100%" height="100%" viewBox="0 0 615.52 615.52" style="enable-background:new 0 0 615.52 615.52;"
	 xml:space="preserve">
<g>
	<g>
		<g id="Search__x28_and_thou_shall_find_x29_">
			<g>
				<path d="M602.531,549.736l-184.31-185.368c26.679-37.72,42.528-83.729,42.528-133.548C460.75,103.35,357.997,0,231.258,0
					C104.518,0,1.765,103.35,1.765,230.82c0,127.47,102.753,230.82,229.493,230.82c49.53,0,95.271-15.944,132.78-42.777
					l184.31,185.366c7.482,7.521,17.292,11.291,27.102,11.291c9.812,0,19.62-3.77,27.083-11.291
					C617.496,589.188,617.496,564.777,602.531,549.736z M355.9,319.763l-15.042,21.273L319.7,356.174
					c-26.083,18.658-56.667,28.526-88.442,28.526c-84.365,0-152.995-69.035-152.995-153.88c0-84.846,68.63-153.88,152.995-153.88
					s152.996,69.034,152.996,153.88C384.271,262.769,374.462,293.526,355.9,319.763z"/>
			</g>
		</g>
	</g>
</g>

</svg>
<svg *ngIf="name == 'clear'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 51.976 51.976" style="enable-background:new 0 0 51.976 51.976;" xml:space="preserve">
<g>
	<path d="M44.373,7.603c-10.137-10.137-26.632-10.138-36.77,0c-10.138,10.138-10.137,26.632,0,36.77s26.632,10.138,36.77,0
		C54.51,34.235,54.51,17.74,44.373,7.603z M36.241,36.241c-0.781,0.781-2.047,0.781-2.828,0l-7.425-7.425l-7.778,7.778
		c-0.781,0.781-2.047,0.781-2.828,0c-0.781-0.781-0.781-2.047,0-2.828l7.778-7.778l-7.425-7.425c-0.781-0.781-0.781-2.048,0-2.828
		c0.781-0.781,2.047-0.781,2.828,0l7.425,7.425l7.071-7.071c0.781-0.781,2.047-0.781,2.828,0c0.781,0.781,0.781,2.047,0,2.828
		l-7.071,7.071l7.425,7.425C37.022,34.194,37.022,35.46,36.241,36.241z"/>
</g>
</svg>`,
                    encapsulation: ViewEncapsulation.None,
                }]
        }], propDecorators: { name: [{
                type: Input
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS1pdGVtLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vcHJvamVjdHMvYW5ndWxhcjItbXVsdGlzZWxlY3QtZHJvcGRvd24tbGliL3NyYy9saWIvbWVudS1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQStCLFdBQVcsRUFBb0IsWUFBWSxFQUFnRCxpQkFBaUIsRUFBRSxLQUFLLEVBQW1GLE1BQU0sZUFBZSxDQUFDOzs7QUFTN1EsTUFBTSxPQUFPLElBQUk7SUFHYjtJQUNBLENBQUM7O2tHQUpRLElBQUk7c0ZBQUosSUFBSSxvRkFFQyxXQUFXLDhEQUxqQixFQUFFOzRGQUdELElBQUk7a0JBTGhCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRSxFQUFFO2lCQUNiOzBFQUk4QyxRQUFRO3NCQUFsRCxZQUFZO3VCQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7O0FBVzdDLE1BQU0sT0FBTyxLQUFLO0lBR2Q7SUFDQSxDQUFDOzttR0FKUSxLQUFLO3VGQUFMLEtBQUsscUZBRUEsV0FBVyw4REFMakIsRUFBRTs0RkFHRCxLQUFLO2tCQUxqQixTQUFTO21CQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsRUFBRTtpQkFDYjswRUFJOEMsUUFBUTtzQkFBbEQsWUFBWTt1QkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDOztBQVc3QyxNQUFNLE9BQU8sTUFBTTtJQUdmO0lBQ0EsQ0FBQzs7b0dBSlEsTUFBTTt3RkFBTixNQUFNLHNGQUVELFdBQVcsOERBTGpCLEVBQUU7NEZBR0QsTUFBTTtrQkFMbEIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7MEVBSThDLFFBQVE7c0JBQWxELFlBQVk7dUJBQUMsV0FBVyxFQUFFLEVBQUMsTUFBTSxFQUFFLElBQUksRUFBQzs7QUFVN0MsTUFBTSxPQUFPLGdCQUFnQjtJQU16QixZQUFtQixhQUErQjtRQUEvQixrQkFBYSxHQUFiLGFBQWEsQ0FBa0I7SUFDbEQsQ0FBQztJQUNELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDbEUsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ3ZCLE1BQU0sRUFBQyxJQUFJLENBQUMsSUFBSTtTQUNuQixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNiLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7OEdBakJXLGdCQUFnQjtrR0FBaEIsZ0JBQWdCLGtHQUhqQixFQUFFOzRGQUdELGdCQUFnQjtrQkFMNUIsU0FBUzttQkFBQztvQkFDVCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixRQUFRLEVBQUUsRUFBRTtpQkFDYjt1R0FJWSxJQUFJO3NCQUFaLEtBQUs7Z0JBQ0csSUFBSTtzQkFBWixLQUFLOztBQXVGVixNQUFNLE9BQU8sS0FBSzs7bUdBQUwsS0FBSzt1RkFBTCxLQUFLLHdFQW5FTjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E4REw7NEZBS00sS0FBSztrQkFyRWpCLFNBQVM7bUJBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLFFBQVEsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0E4REw7b0JBQ0wsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7aUJBRXRDOzhCQUlZLElBQUk7c0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkRlc3Ryb3ksIE5nTW9kdWxlLCBUZW1wbGF0ZVJlZiwgQWZ0ZXJDb250ZW50SW5pdCwgQ29udGVudENoaWxkLCBFbWJlZGRlZFZpZXdSZWYsIE9uQ2hhbmdlcywgVmlld0NvbnRhaW5lclJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgRWxlbWVudFJlZiwgQWZ0ZXJWaWV3SW5pdCwgUGlwZSwgUGlwZVRyYW5zZm9ybSwgRGlyZWN0aXZlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTYWZlUmVzb3VyY2VVcmwsIERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gICAgICAgZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1pdGVtJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuXG5leHBvcnQgY2xhc3MgSXRlbSB7IFxuXG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICAgY29uc3RydWN0b3IoKSB7ICAgXG4gICAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtYmFkZ2UnLFxuICB0ZW1wbGF0ZTogYGBcbn0pXG5cbmV4cG9ydCBjbGFzcyBCYWRnZSB7IFxuXG4gICAgQENvbnRlbnRDaGlsZChUZW1wbGF0ZVJlZiwge3N0YXRpYzogdHJ1ZX0pIHRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+XG4gICAgY29uc3RydWN0b3IoKSB7ICAgXG4gICAgfVxuXG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2Mtc2VhcmNoJyxcbiAgdGVtcGxhdGU6IGBgXG59KVxuXG5leHBvcnQgY2xhc3MgU2VhcmNoIHsgXG5cbiAgICBAQ29udGVudENoaWxkKFRlbXBsYXRlUmVmLCB7c3RhdGljOiB0cnVlfSkgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPGFueT5cbiAgICBjb25zdHJ1Y3RvcigpIHsgICBcbiAgICB9XG5cbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2MtdGVtcGxhdGVSZW5kZXJlcicsXG4gIHRlbXBsYXRlOiBgYFxufSlcblxuZXhwb3J0IGNsYXNzIFRlbXBsYXRlUmVuZGVyZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7IFxuXG4gICAgQElucHV0KCkgZGF0YTogYW55XG4gICAgQElucHV0KCkgaXRlbTogYW55XG4gICAgdmlldzogRW1iZWRkZWRWaWV3UmVmPGFueT47XG5cbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgdmlld0NvbnRhaW5lcjogVmlld0NvbnRhaW5lclJlZikgeyAgIFxuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy52aWV3ID0gdGhpcy52aWV3Q29udGFpbmVyLmNyZWF0ZUVtYmVkZGVkVmlldyh0aGlzLmRhdGEudGVtcGxhdGUsIHtcbiAgICAgICAgICAgICdcXCRpbXBsaWNpdCc6IHRoaXMuZGF0YSxcbiAgICAgICAgICAgICdpdGVtJzp0aGlzLml0ZW1cbiAgICAgICAgfSk7XG4gICAgfVxuXHRcbiAgICBuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLnZpZXcuZGVzdHJveSgpO1xuXHR9XG5cbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYy1pY29uJyxcbiAgdGVtcGxhdGU6IGA8c3ZnICpuZ0lmPVwibmFtZSA9PSAncmVtb3ZlJ1wiIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCA0Ny45NzEgNDcuOTcxXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ3Ljk3MSA0Ny45NzE7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxnPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjguMjI4LDIzLjk4Nkw0Ny4wOTIsNS4xMjJjMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MmMtMS4xNzItMS4xNzItMy4wNy0xLjE3Mi00LjI0MiwwTDIzLjk4NiwxOS43NDRMNS4xMjEsMC44OFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLTEuMTcyLTEuMTcyLTMuMDctMS4xNzItNC4yNDIsMGMtMS4xNzIsMS4xNzEtMS4xNzIsMy4wNzEsMCw0LjI0MmwxOC44NjUsMTguODY0TDAuODc5LDQyLjg1Yy0xLjE3MiwxLjE3MS0xLjE3MiwzLjA3MSwwLDQuMjQyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEMxLjQ2NSw0Ny42NzcsMi4yMzMsNDcuOTcsMyw0Ny45N3MxLjUzNS0wLjI5MywyLjEyMS0wLjg3OWwxOC44NjUtMTguODY0TDQyLjg1LDQ3LjA5MWMwLjU4NiwwLjU4NiwxLjM1NCwwLjg3OSwyLjEyMSwwLjg3OVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzMS41MzUtMC4yOTMsMi4xMjEtMC44NzljMS4xNzItMS4xNzEsMS4xNzItMy4wNzEsMC00LjI0MkwyOC4yMjgsMjMuOTg2elwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICA8c3ZnICpuZ0lmPVwibmFtZSA9PSAnYW5nbGUtZG93bidcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuXHQgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgNjEyIDYxMlwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2MTIgNjEyO1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG48Zz5cblx0PGcgaWQ9XCJfeDMxXzBfMzRfXCI+XG5cdFx0PGc+XG5cdFx0XHQ8cGF0aCBkPVwiTTYwNC41MDEsMTM0Ljc4MmMtOS45OTktMTAuMDUtMjYuMjIyLTEwLjA1LTM2LjIyMSwwTDMwNi4wMTQsNDIyLjU1OEw0My43MjEsMTM0Ljc4MlxuXHRcdFx0XHRjLTkuOTk5LTEwLjA1LTI2LjIyMy0xMC4wNS0zNi4yMjIsMHMtOS45OTksMjYuMzUsMCwzNi4zOTlsMjc5LjEwMywzMDYuMjQxYzUuMzMxLDUuMzU3LDEyLjQyMiw3LjY1MiwxOS4zODYsNy4yOTZcblx0XHRcdFx0YzYuOTg4LDAuMzU2LDE0LjA1NS0xLjkzOSwxOS4zODYtNy4yOTZsMjc5LjEyOC0zMDYuMjY4QzYxNC41LDE2MS4xMDYsNjE0LjUsMTQ0LjgzMiw2MDQuNTAxLDEzNC43ODJ6XCIvPlxuXHRcdDwvZz5cblx0PC9nPlxuPC9nPlxuPC9zdmc+XG48c3ZnICpuZ0lmPVwibmFtZSA9PSAnYW5nbGUtdXAnXCIgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHhtbG5zOnhsaW5rPVwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiIHg9XCIwcHhcIiB5PVwiMHB4XCJcblx0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiB2aWV3Qm94PVwiMCAwIDYxMiA2MTJcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNjEyIDYxMjtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuPGc+XG5cdDxnIGlkPVwiX3gzOV9fMzBfXCI+XG5cdFx0PGc+XG5cdFx0XHQ8cGF0aCBkPVwiTTYwNC41MDEsNDQwLjUwOUwzMjUuMzk4LDEzNC45NTZjLTUuMzMxLTUuMzU3LTEyLjQyMy03LjYyNy0xOS4zODYtNy4yN2MtNi45ODktMC4zNTctMTQuMDU2LDEuOTEzLTE5LjM4Nyw3LjI3XG5cdFx0XHRcdEw3LjQ5OSw0NDAuNTA5Yy05Ljk5OSwxMC4wMjQtOS45OTksMjYuMjk4LDAsMzYuMzIzczI2LjIyMywxMC4wMjQsMzYuMjIyLDBsMjYyLjI5My0yODcuMTY0TDU2OC4yOCw0NzYuODMyXG5cdFx0XHRcdGM5Ljk5OSwxMC4wMjQsMjYuMjIyLDEwLjAyNCwzNi4yMjEsMEM2MTQuNSw0NjYuODA5LDYxNC41LDQ1MC41MzQsNjA0LjUwMSw0NDAuNTA5elwiLz5cblx0XHQ8L2c+XG5cdDwvZz5cbjwvZz5cblxuPC9zdmc+XG48c3ZnICpuZ0lmPVwibmFtZSA9PSAnc2VhcmNoJ1wiIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4PVwiMHB4XCIgeT1cIjBweFwiXG5cdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgdmlld0JveD1cIjAgMCA2MTUuNTIgNjE1LjUyXCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYxNS41MiA2MTUuNTI7XCJcblx0IHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG48Zz5cblx0PGc+XG5cdFx0PGcgaWQ9XCJTZWFyY2hfX3gyOF9hbmRfdGhvdV9zaGFsbF9maW5kX3gyOV9cIj5cblx0XHRcdDxnPlxuXHRcdFx0XHQ8cGF0aCBkPVwiTTYwMi41MzEsNTQ5LjczNmwtMTg0LjMxLTE4NS4zNjhjMjYuNjc5LTM3LjcyLDQyLjUyOC04My43MjksNDIuNTI4LTEzMy41NDhDNDYwLjc1LDEwMy4zNSwzNTcuOTk3LDAsMjMxLjI1OCwwXG5cdFx0XHRcdFx0QzEwNC41MTgsMCwxLjc2NSwxMDMuMzUsMS43NjUsMjMwLjgyYzAsMTI3LjQ3LDEwMi43NTMsMjMwLjgyLDIyOS40OTMsMjMwLjgyYzQ5LjUzLDAsOTUuMjcxLTE1Ljk0NCwxMzIuNzgtNDIuNzc3XG5cdFx0XHRcdFx0bDE4NC4zMSwxODUuMzY2YzcuNDgyLDcuNTIxLDE3LjI5MiwxMS4yOTEsMjcuMTAyLDExLjI5MWM5LjgxMiwwLDE5LjYyLTMuNzcsMjcuMDgzLTExLjI5MVxuXHRcdFx0XHRcdEM2MTcuNDk2LDU4OS4xODgsNjE3LjQ5Niw1NjQuNzc3LDYwMi41MzEsNTQ5LjczNnogTTM1NS45LDMxOS43NjNsLTE1LjA0MiwyMS4yNzNMMzE5LjcsMzU2LjE3NFxuXHRcdFx0XHRcdGMtMjYuMDgzLDE4LjY1OC01Ni42NjcsMjguNTI2LTg4LjQ0MiwyOC41MjZjLTg0LjM2NSwwLTE1Mi45OTUtNjkuMDM1LTE1Mi45OTUtMTUzLjg4YzAtODQuODQ2LDY4LjYzLTE1My44OCwxNTIuOTk1LTE1My44OFxuXHRcdFx0XHRcdHMxNTIuOTk2LDY5LjAzNCwxNTIuOTk2LDE1My44OEMzODQuMjcxLDI2Mi43NjksMzc0LjQ2MiwyOTMuNTI2LDM1NS45LDMxOS43NjN6XCIvPlxuXHRcdFx0PC9nPlxuXHRcdDwvZz5cblx0PC9nPlxuPC9nPlxuXG48L3N2Zz5cbjxzdmcgKm5nSWY9XCJuYW1lID09ICdjbGVhcidcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuXHQgdmlld0JveD1cIjAgMCA1MS45NzYgNTEuOTc2XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxLjk3NiA1MS45NzY7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbjxnPlxuXHQ8cGF0aCBkPVwiTTQ0LjM3Myw3LjYwM2MtMTAuMTM3LTEwLjEzNy0yNi42MzItMTAuMTM4LTM2Ljc3LDBjLTEwLjEzOCwxMC4xMzgtMTAuMTM3LDI2LjYzMiwwLDM2Ljc3czI2LjYzMiwxMC4xMzgsMzYuNzcsMFxuXHRcdEM1NC41MSwzNC4yMzUsNTQuNTEsMTcuNzQsNDQuMzczLDcuNjAzeiBNMzYuMjQxLDM2LjI0MWMtMC43ODEsMC43ODEtMi4wNDcsMC43ODEtMi44MjgsMGwtNy40MjUtNy40MjVsLTcuNzc4LDcuNzc4XG5cdFx0Yy0wLjc4MSwwLjc4MS0yLjA0NywwLjc4MS0yLjgyOCwwYy0wLjc4MS0wLjc4MS0wLjc4MS0yLjA0NywwLTIuODI4bDcuNzc4LTcuNzc4bC03LjQyNS03LjQyNWMtMC43ODEtMC43ODEtMC43ODEtMi4wNDgsMC0yLjgyOFxuXHRcdGMwLjc4MS0wLjc4MSwyLjA0Ny0wLjc4MSwyLjgyOCwwbDcuNDI1LDcuNDI1bDcuMDcxLTcuMDcxYzAuNzgxLTAuNzgxLDIuMDQ3LTAuNzgxLDIuODI4LDBjMC43ODEsMC43ODEsMC43ODEsMi4wNDcsMCwyLjgyOFxuXHRcdGwtNy4wNzEsNy4wNzFsNy40MjUsNy40MjVDMzcuMDIyLDM0LjE5NCwzNy4wMjIsMzUuNDYsMzYuMjQxLDM2LjI0MXpcIi8+XG48L2c+XG48L3N2Zz5gLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuXG59KVxuXG5leHBvcnQgY2xhc3MgQ0ljb24geyBcblxuICAgIEBJbnB1dCgpIG5hbWU6YW55O1xuXG59Il19