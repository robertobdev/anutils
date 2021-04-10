import { ElementRef, OnInit } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class CpfMaskDirective implements OnInit {
    private el;
    private previousValue;
    constructor(el: ElementRef);
    setMask(): void;
    ngOnInit(): void;
    createMask(cpf: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CpfMaskDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<CpfMaskDirective, "[anutilsCpfMask]", never, {}, {}, never>;
}

//# sourceMappingURL=cpf-mask.directive.d.ts.map