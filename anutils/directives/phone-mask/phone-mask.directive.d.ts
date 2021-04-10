import { ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PhoneMaskDirective implements OnInit {
    private el;
    maskType: number | undefined;
    private previousValue;
    constructor(el: ElementRef);
    setMask(): void;
    ngOnInit(): void;
    createMask(phone: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PhoneMaskDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<PhoneMaskDirective, "[anutilsPhoneMask]", never, { "maskType": "anutilsPhoneMask"; }, {}, never>;
}

//# sourceMappingURL=phone-mask.directive.d.ts.map