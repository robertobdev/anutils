import { Directive, ElementRef, HostListener, Input, HostBinding, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class CpfMaskDirective {
    constructor(el) {
        this.el = el;
        this.previousValue = '';
    }
    setMask() {
        const element = this.el.nativeElement;
        const mask = this.createMask(element.value);
        if (element.value !== this.previousValue) {
            element.value = mask;
            this.previousValue = mask;
            element.dispatchEvent(new Event('input'));
        }
    }
    ngOnInit() {
        setTimeout(() => this.setMask(), 0);
    }
    createMask(cpf) {
        let newVal = cpf.replace(/\D/g, '');
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
    }
}
CpfMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anutilsCpfMask]',
            },] }
];
CpfMaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
CpfMaskDirective.propDecorators = {
    setMask: [{ type: HostListener, args: ['input',] }]
};

class CnpjMaskDirective {
    constructor(el) {
        this.el = el;
        this.previousValue = '';
    }
    setMask() {
        const element = this.el.nativeElement;
        const mask = this.createMask(element.value);
        if (element.value !== this.previousValue) {
            element.value = mask;
            this.previousValue = mask;
            element.dispatchEvent(new Event('input'));
        }
    }
    ngOnInit() {
        setTimeout(() => this.setMask(), 0);
    }
    createMask(cnpj) {
        let newVal = cnpj.replace(/\D/g, '');
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
    }
}
CnpjMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anutilsCnpjMask]',
            },] }
];
CnpjMaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
CnpjMaskDirective.propDecorators = {
    setMask: [{ type: HostListener, args: ['input',] }]
};

class PhoneMaskDirective {
    constructor(el) {
        this.el = el;
        this.previousValue = '';
    }
    setMask() {
        const element = this.el.nativeElement;
        const mask = this.createMask(element.value);
        if (element.value !== this.previousValue) {
            element.value = mask;
            this.previousValue = mask;
            element.dispatchEvent(new Event('input'));
            setTimeout(() => {
                element.dispatchEvent(new Event('input'));
            });
        }
    }
    ngOnInit() {
        setTimeout(() => this.setMask(), 0);
    }
    createMask(phone) {
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
    }
}
PhoneMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anutilsPhoneMask]',
            },] }
];
PhoneMaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
PhoneMaskDirective.propDecorators = {
    maskType: [{ type: Input, args: ['anutilsPhoneMask',] }],
    setMask: [{ type: HostListener, args: ['ngModelChange',] }, { type: HostListener, args: ['input',] }]
};

class ZipCodeMaskDirective {
    constructor(el) {
        this.el = el;
        this.previousValue = '';
    }
    setMask() {
        const element = this.el.nativeElement;
        const mask = this.createMask(element.value);
        if (element.value !== this.previousValue) {
            element.value = mask;
            this.previousValue = mask;
            element.dispatchEvent(new Event('input'));
            setTimeout(() => {
                element.dispatchEvent(new Event('input'));
            });
        }
    }
    ngOnInit() {
        setTimeout(() => this.setMask(), 0);
    }
    createMask(zipCode) {
        if (zipCode.length == 0) {
            return '';
        }
        if (zipCode.length <= 9) {
            zipCode = zipCode.replace(/\D/g, '');
            zipCode = zipCode.replace(/^(\d{5})(\d)/, '$1-$2');
            return zipCode;
        }
        return zipCode.substr(0, 9);
    }
}
ZipCodeMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anutilsZipCodeMask]',
            },] }
];
ZipCodeMaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
ZipCodeMaskDirective.propDecorators = {
    setMask: [{ type: HostListener, args: ['ngModelChange',] }, { type: HostListener, args: ['input',] }]
};

class ShimmerDirective {
    constructor() {
        this.anutilsShimmer = false;
        this.anutilsShimmerInfo = { width: '0', height: '0' };
    }
    get shimmer() {
        return this.anutilsShimmer;
    }
    ngOnChanges() {
        if (this.anutilsShimmer) {
            this.width = this.anutilsShimmerInfo.width;
            this.height = this.anutilsShimmerInfo.height;
        }
        else {
            this.width = 'auto';
            this.height = 'auto';
        }
    }
}
ShimmerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anutilsShimmer]',
            },] }
];
ShimmerDirective.propDecorators = {
    anutilsShimmer: [{ type: Input }],
    anutilsShimmerInfo: [{ type: Input }],
    shimmer: [{ type: HostBinding, args: ['class.shimmer',] }],
    width: [{ type: HostBinding, args: ['style.width',] }],
    height: [{ type: HostBinding, args: ['style.height',] }]
};

class AnutilsDirectivesModule {
}
AnutilsDirectivesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    CpfMaskDirective,
                    CnpjMaskDirective,
                    PhoneMaskDirective,
                    ZipCodeMaskDirective,
                    ShimmerDirective,
                ],
                imports: [CommonModule],
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

export { AnutilsDirectivesModule, CnpjMaskDirective, CpfMaskDirective, PhoneMaskDirective, ShimmerDirective, ZipCodeMaskDirective };
//# sourceMappingURL=anutils-directives.js.map
