(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('anutils', ['exports', '@angular/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.anutils = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var AnutilsModule = /** @class */ (function () {
        function AnutilsModule() {
        }
        return AnutilsModule;
    }());
    AnutilsModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [],
                    imports: [],
                    exports: [],
                },] }
    ];

    /*
     * Public API Surface of anutils
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnutilsModule = AnutilsModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=anutils.umd.js.map
