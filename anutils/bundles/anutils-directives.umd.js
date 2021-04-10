(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('anutils/directives', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global.anutils = global.anutils || {}, global.anutils.directives = {}), global.ng.core, global.ng.common));
}(this, (function (exports, core, common) { 'use strict';

    var CpfMaskDirective = /** @class */ (function () {
        function CpfMaskDirective(el) {
            this.el = el;
            this.previousValue = '';
        }
        CpfMaskDirective.prototype.setMask = function () {
            var element = this.el.nativeElement;
            var mask = this.createMask(element.value);
            if (element.value !== this.previousValue) {
                element.value = mask;
                this.previousValue = mask;
                element.dispatchEvent(new Event('input'));
            }
        };
        CpfMaskDirective.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () { return _this.setMask(); }, 0);
        };
        CpfMaskDirective.prototype.createMask = function (cpf) {
            var newVal = cpf.replace(/\D/g, '');
            if (newVal.length === 0) {
                newVal = '';
            }
            else if (newVal.length <= 3) {
                newVal = newVal.replace(/^(\d{0,3})/, '$1');
            }
            else if (newVal.length <= 6) {
                newVal = newVal.replace(/^(\d{0,3})(.*)/, '$1.$2');
            }
            else if (newVal.length <= 9) {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1.$2.$3');
            }
            else {
                newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(\d{0,3})(.*)/, '$1.$2.$3-$4');
            }
            return newVal.substr(0, 14);
        };
        return CpfMaskDirective;
    }());
    CpfMaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[anutilsCpfMask]',
                },] }
    ];
    CpfMaskDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    CpfMaskDirective.propDecorators = {
        setMask: [{ type: core.HostListener, args: ['input',] }]
    };

    var CnpjMaskDirective = /** @class */ (function () {
        function CnpjMaskDirective(el) {
            this.el = el;
            this.previousValue = '';
        }
        CnpjMaskDirective.prototype.setMask = function () {
            var element = this.el.nativeElement;
            var mask = this.createMask(element.value);
            if (element.value !== this.previousValue) {
                element.value = mask;
                this.previousValue = mask;
                element.dispatchEvent(new Event('input'));
            }
        };
        CnpjMaskDirective.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () { return _this.setMask(); }, 0);
        };
        CnpjMaskDirective.prototype.createMask = function (cnpj) {
            var newVal = cnpj.replace(/\D/g, '');
            if (newVal.length === 0) {
                newVal = '';
            }
            else if (newVal.length <= 2) {
                newVal = newVal.replace(/^(\d{0,2})/, '$1');
            }
            else if (newVal.length <= 6) {
                newVal = newVal.replace(/^(\d{0,2})(.*)/, '$1.$2');
            }
            else if (newVal.length <= 9) {
                newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(.*)/, '$1.$2.$3');
            }
            else if (newVal.length <= 13) {
                newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(.*)/, '$1.$2.$3/$4');
            }
            else {
                newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(.*)/, '$1.$2.$3/$4-$5');
            }
            return newVal.substr(0, 18);
        };
        return CnpjMaskDirective;
    }());
    CnpjMaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[anutilsCnpjMask]',
                },] }
    ];
    CnpjMaskDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    CnpjMaskDirective.propDecorators = {
        setMask: [{ type: core.HostListener, args: ['input',] }]
    };

    var PhoneMaskDirective = /** @class */ (function () {
        function PhoneMaskDirective(el) {
            this.el = el;
            this.previousValue = '';
        }
        PhoneMaskDirective.prototype.setMask = function () {
            var element = this.el.nativeElement;
            var mask = this.createMask(element.value);
            if (element.value !== this.previousValue) {
                element.value = mask;
                this.previousValue = mask;
                element.dispatchEvent(new Event('input'));
                setTimeout(function () {
                    element.dispatchEvent(new Event('input'));
                });
            }
        };
        PhoneMaskDirective.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () { return _this.setMask(); }, 0);
        };
        PhoneMaskDirective.prototype.createMask = function (phone) {
            phone = phone.replace(/\D/g, '');
            if (phone.length == 0) {
                return '';
            }
            if (phone.length <= 2) {
                return phone.replace(/^(\d{0,2})/, '($1');
            }
            if (phone.length <= 7) {
                return phone.replace(/^(\d{0,2})(.*)/, '($1) $2');
            }
            if (phone.length <= 10 && this.maskType == 9) {
                return phone.replace(/^(\d{0,2})(\d{0,5})(.*)/, '($1) $2-$3');
            }
            if (phone.length <= 10) {
                return phone.replace(/^(\d{0,2})(\d{0,4})(.*)/, '($1) $2-$3');
            }
            return phone
                .replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})/, '($1) $2-$3-$4')
                .substr(0, 16);
        };
        return PhoneMaskDirective;
    }());
    PhoneMaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[anutilsPhoneMask]',
                },] }
    ];
    PhoneMaskDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    PhoneMaskDirective.propDecorators = {
        maskType: [{ type: core.Input, args: ['anutilsPhoneMask',] }],
        setMask: [{ type: core.HostListener, args: ['ngModelChange',] }, { type: core.HostListener, args: ['input',] }]
    };

    var ZipCodeMaskDirective = /** @class */ (function () {
        function ZipCodeMaskDirective(el) {
            this.el = el;
            this.previousValue = '';
        }
        ZipCodeMaskDirective.prototype.setMask = function () {
            var element = this.el.nativeElement;
            var mask = this.createMask(element.value);
            if (element.value !== this.previousValue) {
                element.value = mask;
                this.previousValue = mask;
                element.dispatchEvent(new Event('input'));
                setTimeout(function () {
                    element.dispatchEvent(new Event('input'));
                });
            }
        };
        ZipCodeMaskDirective.prototype.ngOnInit = function () {
            var _this = this;
            setTimeout(function () { return _this.setMask(); }, 0);
        };
        ZipCodeMaskDirective.prototype.createMask = function (zipCode) {
            if (zipCode.length == 0) {
                return '';
            }
            if (zipCode.length <= 9) {
                zipCode = zipCode.replace(/\D/g, '');
                zipCode = zipCode.replace(/^(\d{5})(\d)/, '$1-$2');
                return zipCode;
            }
            return zipCode.substr(0, 9);
        };
        return ZipCodeMaskDirective;
    }());
    ZipCodeMaskDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[anutilsZipCodeMask]',
                },] }
    ];
    ZipCodeMaskDirective.ctorParameters = function () { return [
        { type: core.ElementRef }
    ]; };
    ZipCodeMaskDirective.propDecorators = {
        setMask: [{ type: core.HostListener, args: ['ngModelChange',] }, { type: core.HostListener, args: ['input',] }]
    };

    var ShimmerDirective = /** @class */ (function () {
        function ShimmerDirective() {
            this.anutilsShimmer = false;
            this.anutilsShimmerInfo = { width: '0', height: '0' };
        }
        Object.defineProperty(ShimmerDirective.prototype, "shimmer", {
            get: function () {
                return this.anutilsShimmer;
            },
            enumerable: false,
            configurable: true
        });
        ShimmerDirective.prototype.ngOnChanges = function () {
            if (this.anutilsShimmer) {
                this.width = this.anutilsShimmerInfo.width;
                this.height = this.anutilsShimmerInfo.height;
            }
            else {
                this.width = 'auto';
                this.height = 'auto';
            }
        };
        return ShimmerDirective;
    }());
    ShimmerDirective.decorators = [
        { type: core.Directive, args: [{
                    selector: '[anutilsShimmer]',
                },] }
    ];
    ShimmerDirective.propDecorators = {
        anutilsShimmer: [{ type: core.Input }],
        anutilsShimmerInfo: [{ type: core.Input }],
        shimmer: [{ type: core.HostBinding, args: ['class.shimmer',] }],
        width: [{ type: core.HostBinding, args: ['style.width',] }],
        height: [{ type: core.HostBinding, args: ['style.height',] }]
    };

    var AnutilsDirectivesModule = /** @class */ (function () {
        function AnutilsDirectivesModule() {
        }
        return AnutilsDirectivesModule;
    }());
    AnutilsDirectivesModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [
                        CpfMaskDirective,
                        CnpjMaskDirective,
                        PhoneMaskDirective,
                        ZipCodeMaskDirective,
                        ShimmerDirective,
                    ],
                    imports: [common.CommonModule],
                    exports: [
                        CpfMaskDirective,
                        CnpjMaskDirective,
                        PhoneMaskDirective,
                        ZipCodeMaskDirective,
                        ShimmerDirective,
                    ],
                },] }
    ];

    /**
     * Generated bundle index. Do not edit.
     */

    exports.AnutilsDirectivesModule = AnutilsDirectivesModule;
    exports.CnpjMaskDirective = CnpjMaskDirective;
    exports.CpfMaskDirective = CpfMaskDirective;
    exports.PhoneMaskDirective = PhoneMaskDirective;
    exports.ShimmerDirective = ShimmerDirective;
    exports.ZipCodeMaskDirective = ZipCodeMaskDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=anutils-directives.umd.js.map
