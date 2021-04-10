import { ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CnpjMaskDirective implements OnInit {
    private el;
    private previousValue;
    constructor(el: ElementRef);
    setMask(): void;
    ngOnInit(): void;
    createMask(cnpj: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CnpjMaskDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CnpjMaskDirective, "[anutilsCnpjMask]", never, {}, {}, never>;
}

//# sourceMappingURL=cnpj-mask.directive.d.ts.map