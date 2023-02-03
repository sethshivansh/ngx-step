(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-step', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-step"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i1) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

    var StageFormatterPipe = /** @class */ (function () {
        function StageFormatterPipe() {
        }
        StageFormatterPipe.prototype.transform = function (data, seprator) {
            if (data) {
                var res = data.split(seprator);
                var displayData = "";
                res.forEach(function (element) {
                    displayData = displayData + ' ' + element;
                });
                return displayData;
            }
            else {
                return '';
            }
        };
        return StageFormatterPipe;
    }());
    StageFormatterPipe.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StageFormatterPipe, deps: [], target: i0__namespace.ɵɵFactoryTarget.Pipe });
    StageFormatterPipe.ɵpipe = i0__namespace.ɵɵngDeclarePipe({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StageFormatterPipe, name: "formatText" });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: StageFormatterPipe, decorators: [{
                type: i0.Pipe,
                args: [{
                        name: 'formatText'
                    }]
            }] });

    var NgxStepComponent = /** @class */ (function () {
        function NgxStepComponent() {
            this.updateProgressLogs = [];
            this.stages = [1, 2, 3, 4, 5];
            this.jobOverallStatus = 'NOT_STARTED'; // Possible Values- NOT_STARTED , ACTIVE, COMPLETED, FAILED
            this.options = {
                type: 'BASIC',
                excludeFirstEntry: false,
                showLogs: false,
                finalStageName: 'FINISH',
                isMultiWordStageName: false,
                textSeparator: '_'
            };
            this.states = [];
        }
        NgxStepComponent.prototype.ngOnChanges = function (changes) {
            this.ngOnInit();
        };
        NgxStepComponent.prototype.ngOnInit = function () {
            this.generateStages();
        };
        NgxStepComponent.prototype.generateStages = function () {
            var _this = this;
            if (this.options.type === 'CUSTOM') {
                var result_1 = this.groupBy(this.updateProgressLogs.updateInfo, function (obj) { return obj.stage; });
                if (this.states.length > 0) {
                    this.states = []; //reset previous states data 
                }
                this.stages.forEach(function (item, index) {
                    var element = item.name ? item.name : item;
                    if (element in result_1) {
                        var stageStatus = result_1[element][result_1[element].length - 1].status;
                        _this.states.push({ 'name': element, 'status': stageStatus });
                    }
                    else {
                        // Then take the value from the updateInfo object
                        if (index <= 0) {
                            _this.states.push({ 'name': element, 'status': 'IN_PROGRESS' });
                        }
                        else {
                            // Check if previous stage of not found element is completed then make the not found stage at position 'index' status as IN_PROGRESS else 'NOT_STARTED'.
                            var previousStateStatus = _this.states[index - 1].status;
                            var newStatusForNotFoundStage = previousStateStatus === 'COMPLETED' ? 'IN_PROGRESS' : 'NOT_STARTED';
                            _this.states.push({ 'name': element, 'status': newStatusForNotFoundStage });
                        }
                    }
                });
            }
        };
        NgxStepComponent.prototype.groupBy = function (array, key) {
            var keyFn = key instanceof Function ? key : function (obj) { return obj[key]; };
            return array.reduce(function (objectsByKeyValue, obj) {
                var value = keyFn(obj);
                objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
                return objectsByKeyValue;
            }, {});
        };
        return NgxStepComponent;
    }());
    NgxStepComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxStepComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
    NgxStepComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NgxStepComponent, selector: "ngx-step", inputs: { updateProgressLogs: "updateProgressLogs", stages: "stages", jobOverallStatus: "jobOverallStatus", options: "options" }, usesOnChanges: true, ngImport: i0__namespace, template: "<div class=\"row mt-2\" style=\"overflow: hidden !important;\" *ngIf=\"options.type === 'BASIC'\">\r\n    <div class=\"col-md-12 col-sm-12 job-progress-bar p-0 bg-white\">\r\n        <div class=\"track\" *ngIf=\"stages.length >0\">\r\n            <div class=\"step\" [ngClass]=\"state.status\" *ngFor=\"let state of stages; let i = index\">\r\n                <span class=\"icon\"> <em class=\"fas\" [ngClass]=\"{\r\n                    'fa-check': state.status === 'COMPLETED',\r\n                    'fa-sync fa-spin': state.status === 'IN_PROGRESS',\r\n                    'fa-times': state.status === 'FAILED',\r\n                    'fa-circle': state.status === 'NOT_STARTED'\r\n                }\"></em> </span>\r\n                <span class=\"text\" *ngIf=\"options.isMultiWordStageName\">{{state.name | formatText : options.textSeparator}}</span>\r\n                <span class=\"text\" *ngIf=\"!options.isMultiWordStageName\">{{state.name}}</span>\r\n\r\n            </div>\r\n            <div class=\"step\">\r\n                <span class=\"icon\"\r\n                    [ngClass]=\"{\r\n                        'job-success': (jobOverallStatus === 'COMPLETED' && states[this.states.length - 1].status === 'COMPLETED' ), \r\n                        'text-white': (jobOverallStatus === 'ACTIVE'),\r\n                        'job-failed': (jobOverallStatus === 'FAILED')\r\n                    }\">\r\n                    <em class=\"fa fa-clipboard-check\"\r\n                        *ngIf=\"jobOverallStatus === 'COMPLETED'\"></em>\r\n                    <em class=\"fa fa-times\"\r\n                        *ngIf=\"jobOverallStatus === 'FAILED'\"></em>\r\n                    <em class=\"fa fa-clipboard-check\"\r\n                        *ngIf=\"jobOverallStatus === 'ACTIVE' && states[this.states.length - 1].status != 'COMPLETED'  \"></em>\r\n                    <em class=\"fa fa-cog fa-spin text-muted\"\r\n                        *ngIf=\"jobOverallStatus === 'ACTIVE' && states[this.states.length - 1].status === 'COMPLETED' \"></em>\r\n                </span>\r\n                <span class=\"text\"> \r\n                    {{options.finalStageName}}\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row mt-2\" style=\"overflow: hidden !important;\" *ngIf=\"options.type === 'CUSTOM'\">\r\n    <div class=\"col-md-12 col-sm-12 job-progress-bar p-0 bg-white\">\r\n        <div class=\"track\" *ngIf=\"states.length >0\">\r\n            <div class=\"step\" [ngClass]=\"state.status\" *ngFor=\"let state of states; let i = index\">\r\n                <span class=\"icon\"> <em class=\"fas\" [ngClass]=\"{\r\n                    'fa-check': state.status === 'COMPLETED',\r\n                    'fa-sync fa-spin': state.status === 'IN_PROGRESS',\r\n                    'fa-times': state.status === 'FAILED',\r\n                    'fa-circle': state.status === 'NOT_STARTED'\r\n                }\"></em> </span>\r\n                <span class=\"text\" *ngIf=\"options.isMultiWordStageName\">{{state.name | formatText : options.textSeparator}}</span>\r\n                <span class=\"text\" *ngIf=\"!options.isMultiWordStageName\">{{state.name}}</span>\r\n            </div>\r\n            <div class=\"step\">\r\n                <span class=\"icon\"\r\n                    [ngClass]=\"{\r\n                        'job-success': (jobOverallStatus === 'COMPLETED' && states[this.states.length - 1].status === 'COMPLETED' ), \r\n                        'text-white': (jobOverallStatus === 'ACTIVE'),\r\n                        'job-failed': (jobOverallStatus === 'FAILED')\r\n                    }\">\r\n                    <em class=\"fa fa-clipboard-check\"\r\n                        *ngIf=\"jobOverallStatus === 'COMPLETED'\"></em>\r\n                    <em class=\"fa fa-times\"\r\n                        *ngIf=\"jobOverallStatus === 'FAILED'\"></em>\r\n                    <em class=\"fa fa-clipboard-check\"\r\n                        *ngIf=\"jobOverallStatus === 'ACTIVE' && states[this.states.length - 1].status != 'COMPLETED'  \"></em>\r\n                    <em class=\"fa fa-cog fa-spin text-muted\"\r\n                        *ngIf=\"jobOverallStatus === 'ACTIVE' && states[this.states.length - 1].status === 'COMPLETED' \"></em>\r\n                </span>\r\n                <span class=\"text\"> \r\n                    {{options.finalStageName}} \r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- If user wants Logs to display -->\r\n<div class=\"row mt-2\"  *ngIf=\"options.showLogs\">\r\n    <div class=\"col-md-12\">\r\n        <div class=\"shadow-none\">\r\n            <div class=\"card-header\">\r\n                <h3 class=\"card-title\">Events and Logs</h3>\r\n            </div>\r\n            <div class=\"card-body p-0 elevation-1 table-responsive\">\r\n            </div>\r\n            <div class=\"card-footer\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>", styles: [".wd-100px{width:100px}.wd-150px{width:150px}.label-name{font-weight:500}:host ::ng-deep .last-edited-step-1 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(1):after,:host ::ng-deep .last-edited-step-1 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):before,:host ::ng-deep .last-edited-step-2 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(1):after,:host ::ng-deep .last-edited-step-2 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):before,:host ::ng-deep .last-edited-step-2 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):after,:host ::ng-deep .last-edited-step-2 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):before,:host ::ng-deep .last-edited-step-3 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(1):after,:host ::ng-deep .last-edited-step-3 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):before,:host ::ng-deep .last-edited-step-3 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):after,:host ::ng-deep .last-edited-step-3 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):before,:host ::ng-deep .last-edited-step-3 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):after,:host ::ng-deep .last-edited-step-3 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(7):before,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(1):after,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):before,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):after,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):before,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):after,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(7):before,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(7):after,:host ::ng-deep .last-edited-step-4 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(9):before,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(1):after,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):before,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(3):after,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):before,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(5):after,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(7):before,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(7):after,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(9):before,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(11):after,:host ::ng-deep .last-edited-step-5 .mat-horizontal-stepper-header-container .mat-step-header:nth-child(13):before{border-top-color:#7e8a8a!important}.track{position:relative;display:flex;margin-bottom:40px;margin-top:50px}.track .step{flex-grow:1;width:25%;margin-top:-13px;text-align:center;position:relative}.track .step.active:before{background:#FF5722}.track .step:before{height:5px;position:absolute;content:\"\";width:100%;top:13px}.track .step.active .icon{background:#ee5435;color:#fff}.track .icon{display:inline-block;width:30px;height:30px;line-height:30px;position:relative;border-radius:100%;background:#ddd}.track .step.active .text{font-weight:400;color:#000}.track .text{display:block;margin-top:7px;font-size:12px}.track .step.COMPLETED:before{background:#16b587}.track .step.COMPLETED .icon{background:#16b587;color:#fff}.track .step.COMPLETED .text{font-weight:400;color:#000}.track .step.FAILED:before{background:#f40c48}.track .step.FAILED .icon{background:#f40c48;color:#fff}.track .step.FAILED .text{font-weight:400;color:#f40c48}.track .step.IN_PROGRESS:before{background:#eab417}.track .step.IN_PROGRESS .icon{background:#eab417;color:#fff}.track .step.IN_PROGRESS .text{font-weight:500;color:#000}.track .step.NOT_STARTED:before{background:#dddddd}.track .step.NOT_STARTED .icon{color:#fff}.track .step.NOT_STARTED .text{font-weight:400;color:#6c757d}.job-success{background:#16b587!important;color:#fff}.job-failed{background:#f40c48!important;color:#fff}.removed-node{opacity:.3}.job-create{background-color:#1eb980;text-transform:uppercase}.job-delete{background-color:#f8d7da;text-transform:uppercase}.job-upgrade{background-color:#eab417;text-transform:uppercase}.job-scaleup{background-color:#015a92;text-transform:uppercase;color:#fff}.job-scale-down{background-color:#ccc;text-transform:uppercase}\n"], directives: [{ type: i1__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i1__namespace.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i1__namespace.NgClass, selector: "[ngClass]", inputs: ["class", "ngClass"] }], pipes: { "formatText": StageFormatterPipe } });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxStepComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-step',
                        templateUrl: 'ngx-step.html',
                        styleUrls: ['ngx-step.css']
                    }]
            }], ctorParameters: function () { return []; }, propDecorators: { updateProgressLogs: [{
                    type: i0.Input
                }], stages: [{
                    type: i0.Input
                }], jobOverallStatus: [{
                    type: i0.Input
                }], options: [{
                    type: i0.Input
                }] } });

    var NgxStepModule = /** @class */ (function () {
        function NgxStepModule() {
        }
        return NgxStepModule;
    }());
    NgxStepModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxStepModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NgxStepModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxStepModule, declarations: [NgxStepComponent,
            StageFormatterPipe], imports: [i1.CommonModule], exports: [NgxStepComponent] });
    NgxStepModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxStepModule, imports: [[
                i1.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxStepModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgxStepComponent,
                            StageFormatterPipe
                        ],
                        imports: [
                            i1.CommonModule
                        ],
                        exports: [
                            NgxStepComponent
                        ]
                    }]
            }] });

    /*
     * Public API Surface of ngx-step
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxStepComponent = NgxStepComponent;
    exports.NgxStepModule = NgxStepModule;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-step.umd.js.map
