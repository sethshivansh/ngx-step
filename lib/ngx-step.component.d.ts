import { OnChanges, SimpleChanges } from '@angular/core';
import * as i0 from "@angular/core";
export declare class NgxStepComponent implements OnChanges {
    updateProgressLogs: any;
    stages: any;
    jobOverallStatus: any;
    options: any;
    states: any;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    ngOnInit(): void;
    generateStages(): void;
    groupBy(array: any, key: any): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxStepComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxStepComponent, "ngx-step", never, { "updateProgressLogs": "updateProgressLogs"; "stages": "stages"; "jobOverallStatus": "jobOverallStatus"; "options": "options"; }, {}, never, never>;
}
