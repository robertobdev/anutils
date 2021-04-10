import { OnChanges } from '@angular/core';
import { IShimmer } from './shimmer.interface';
import * as ɵngcc0 from '@angular/core';
export declare class ShimmerDirective implements OnChanges {
    anutilsShimmer: boolean;
    anutilsShimmerInfo: IShimmer;
    get shimmer(): boolean;
    width: string | undefined;
    height: string | undefined;
    ngOnChanges(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ShimmerDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ShimmerDirective, "[anutilsShimmer]", never, { "anutilsShimmer": "anutilsShimmer"; "anutilsShimmerInfo": "anutilsShimmerInfo"; }, {}, never>;
}

//# sourceMappingURL=shimmer.directive.d.ts.map