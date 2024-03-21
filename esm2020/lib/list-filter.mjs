import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "./multiselect.service";
export class ListFilterPipe {
    constructor(ds) {
        this.ds = ds;
        this.filteredList = [];
    }
    transform(items, filter, searchBy) {
        if (!items || !filter || filter == "") {
            return items;
        }
        this.filteredList = items.filter((item) => this.applyFilter(item, filter, searchBy));
        return this.filteredList;
    }
    applyFilter(item, filter, searchBy) {
        let found = false;
        if (searchBy.length > 0) {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var t = 0; t < searchBy.length; t++) {
                    if (filter && item[searchBy[t]] && item[searchBy[t]] != "") {
                        if (item[searchBy[t]].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        else {
            if (item.grpTitle) {
                found = true;
            }
            else {
                for (var prop in item) {
                    if (filter && item[prop]) {
                        if (item[prop].toString().toLowerCase().indexOf(filter.toLowerCase()) >= 0) {
                            found = true;
                        }
                    }
                }
            }
        }
        return found;
    }
}
ListFilterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ListFilterPipe, deps: [{ token: i1.DataService }], target: i0.ɵɵFactoryTarget.Pipe });
ListFilterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "14.0.0", version: "15.2.10", ngImport: i0, type: ListFilterPipe, name: "listFilter" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.2.10", ngImport: i0, type: ListFilterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'listFilter',
                    pure: true
                }]
        }], ctorParameters: function () { return [{ type: i1.DataService }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1maWx0ZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9wcm9qZWN0cy9hbmd1bGFyMi1tdWx0aXNlbGVjdC1kcm9wZG93bi1saWIvc3JjL2xpYi9saXN0LWZpbHRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7O0FBUXBELE1BQU0sT0FBTyxjQUFjO0lBR3ZCLFlBQW9CLEVBQWU7UUFBZixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBRDVCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO0lBRzlCLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBWSxFQUFFLE1BQVcsRUFBRSxRQUFhO1FBQzlDLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBQyxNQUFNLElBQUksTUFBTSxJQUFJLEVBQUUsRUFBRTtZQUNuQyxPQUFPLEtBQUssQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDMUYsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzdCLENBQUM7SUFDRCxXQUFXLENBQUMsSUFBUyxFQUFFLE1BQVcsRUFBRSxRQUFhO1FBQzdDLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNsQixJQUFJLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3JCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixLQUFLLEdBQUcsSUFBSSxDQUFDO2FBQ2hCO2lCQUNJO2dCQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO29CQUN0QyxJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTt3QkFDeEQsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDL0UsS0FBSyxHQUFHLElBQUksQ0FBQzt5QkFDaEI7cUJBQ0o7aUJBQ0o7YUFDSjtTQUVKO2FBQU07WUFDSCxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2YsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNoQjtpQkFDSTtnQkFDRCxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtvQkFDbkIsSUFBSSxNQUFNLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO3dCQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUN4RSxLQUFLLEdBQUcsSUFBSSxDQUFDO3lCQUNoQjtxQkFDSjtpQkFDSjthQUNKO1NBQ0o7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDOzs0R0E5Q1EsY0FBYzswR0FBZCxjQUFjOzRGQUFkLGNBQWM7a0JBSjFCLElBQUk7bUJBQUM7b0JBQ0YsSUFBSSxFQUFFLFlBQVk7b0JBQ2xCLElBQUksRUFBRSxJQUFJO2lCQUNiIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRGF0YVNlcnZpY2UgfSBmcm9tICcuL211bHRpc2VsZWN0LnNlcnZpY2UnO1xuXG5cbkBQaXBlKHtcbiAgICBuYW1lOiAnbGlzdEZpbHRlcicsXG4gICAgcHVyZTogdHJ1ZVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0RmlsdGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xuXG4gICAgcHVibGljIGZpbHRlcmVkTGlzdDogYW55ID0gW107XG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBkczogRGF0YVNlcnZpY2UpIHtcblxuICAgIH1cblxuICAgIHRyYW5zZm9ybShpdGVtczogYW55W10sIGZpbHRlcjogYW55LCBzZWFyY2hCeTogYW55KTogYW55W10ge1xuICAgICAgICBpZiAoIWl0ZW1zIHx8ICFmaWx0ZXIgfHwgZmlsdGVyID09IFwiXCIpIHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtcztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpbHRlcmVkTGlzdCA9IGl0ZW1zLmZpbHRlcigoaXRlbTogYW55KSA9PiB0aGlzLmFwcGx5RmlsdGVyKGl0ZW0sIGZpbHRlciwgc2VhcmNoQnkpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlsdGVyZWRMaXN0O1xuICAgIH1cbiAgICBhcHBseUZpbHRlcihpdGVtOiBhbnksIGZpbHRlcjogYW55LCBzZWFyY2hCeTogYW55KTogYm9vbGVhbiB7XG4gICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAoc2VhcmNoQnkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKGl0ZW0uZ3JwVGl0bGUpIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciB0ID0gMDsgdCA8IHNlYXJjaEJ5Lmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWx0ZXIgJiYgaXRlbVtzZWFyY2hCeVt0XV0gJiYgaXRlbVtzZWFyY2hCeVt0XV0gIT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1bc2VhcmNoQnlbdF1dLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlci50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXRlbS5ncnBUaXRsZSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3AgaW4gaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsdGVyICYmIGl0ZW1bcHJvcF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtW3Byb3BdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlci50b0xvd2VyQ2FzZSgpKSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvdW5kO1xuICAgIH1cbn0iXX0=