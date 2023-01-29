import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class StageFormatterPipe {
    transform(data, seprator) {
        if (data) {
            var res = data.split(seprator);
            var displayData = "";
            res.forEach(element => {
                displayData = displayData + ' ' + element;
            });
            return displayData;
        }
        else {
            return '';
        }
    }
}
StageFormatterPipe.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StageFormatterPipe, deps: [], target: i0.ɵɵFactoryTarget.Pipe });
StageFormatterPipe.ɵpipe = i0.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StageFormatterPipe, name: "formatText" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: StageFormatterPipe, decorators: [{
            type: Pipe,
            args: [{
                    name: 'formatText'
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZ2Vmb3JtYXR0ZXIucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zdGVwL3NyYy9saWIvc3RhZ2Vmb3JtYXR0ZXIucGlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsSUFBSSxFQUFpQixNQUFNLGVBQWUsQ0FBQzs7QUFLcEQsTUFBTSxPQUFPLGtCQUFrQjtJQUU3QixTQUFTLENBQUMsSUFBWSxFQUFFLFFBQWdCO1FBQ3RDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUEsRUFBRTtnQkFDbkIsV0FBVyxHQUFHLFdBQVcsR0FBRyxHQUFHLEdBQUcsT0FBTyxDQUFDO1lBQzVDLENBQUMsQ0FBQyxDQUFDO1lBQ0gsT0FBTyxXQUFXLENBQUM7U0FDcEI7YUFBSTtZQUNILE9BQU8sRUFBRSxDQUFDO1NBQ1g7SUFDSCxDQUFDOztnSEFiVSxrQkFBa0I7OEdBQWxCLGtCQUFrQjs0RkFBbEIsa0JBQWtCO2tCQUg5QixJQUFJO21CQUFDO29CQUNKLElBQUksRUFBRSxZQUFZO2lCQUNuQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICBuYW1lOiAnZm9ybWF0VGV4dCdcclxufSlcclxuZXhwb3J0IGNsYXNzIFN0YWdlRm9ybWF0dGVyUGlwZSBpbXBsZW1lbnRzIFBpcGVUcmFuc2Zvcm0ge1xyXG5cclxuICB0cmFuc2Zvcm0oZGF0YTogc3RyaW5nLCBzZXByYXRvcjogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIHZhciByZXMgPSBkYXRhLnNwbGl0KHNlcHJhdG9yKTtcclxuICAgICAgdmFyIGRpc3BsYXlEYXRhID0gXCJcIjtcclxuICAgICAgcmVzLmZvckVhY2goZWxlbWVudD0+e1xyXG4gICAgICAgIGRpc3BsYXlEYXRhID0gZGlzcGxheURhdGEgKyAnICcgKyBlbGVtZW50O1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIGRpc3BsYXlEYXRhO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==