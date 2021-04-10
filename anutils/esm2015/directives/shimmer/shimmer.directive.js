import { Directive, HostBinding, Input } from '@angular/core';
export class ShimmerDirective {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpbW1lci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbnV0aWxzL2RpcmVjdGl2ZXMvc2hpbW1lci9zaGltbWVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFNekUsTUFBTSxPQUFPLGdCQUFnQjtJQUg3QjtRQUlXLG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLHVCQUFrQixHQUFhLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFrQnRFLENBQUM7SUFoQkMsSUFBa0MsT0FBTztRQUN2QyxPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7SUFDN0IsQ0FBQztJQUtELFdBQVc7UUFDVCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxDQUFDO1lBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQztTQUM5QzthQUFNO1lBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7U0FDdEI7SUFDSCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7YUFDN0I7Ozs2QkFFRSxLQUFLO2lDQUNMLEtBQUs7c0JBRUwsV0FBVyxTQUFDLGVBQWU7b0JBSTNCLFdBQVcsU0FBQyxhQUFhO3FCQUN6QixXQUFXLFNBQUMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSG9zdEJpbmRpbmcsIElucHV0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IElTaGltbWVyIH0gZnJvbSAnLi9zaGltbWVyLmludGVyZmFjZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1thbnV0aWxzU2hpbW1lcl0nLFxufSlcbmV4cG9ydCBjbGFzcyBTaGltbWVyRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYW51dGlsc1NoaW1tZXIgPSBmYWxzZTtcbiAgQElucHV0KCkgYW51dGlsc1NoaW1tZXJJbmZvOiBJU2hpbW1lciA9IHsgd2lkdGg6ICcwJywgaGVpZ2h0OiAnMCcgfTtcblxuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnNoaW1tZXInKSBnZXQgc2hpbW1lcigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hbnV0aWxzU2hpbW1lcjtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKSB3aWR0aDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmhlaWdodCcpIGhlaWdodDogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFudXRpbHNTaGltbWVyKSB7XG4gICAgICB0aGlzLndpZHRoID0gdGhpcy5hbnV0aWxzU2hpbW1lckluZm8ud2lkdGg7XG4gICAgICB0aGlzLmhlaWdodCA9IHRoaXMuYW51dGlsc1NoaW1tZXJJbmZvLmhlaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53aWR0aCA9ICdhdXRvJztcbiAgICAgIHRoaXMuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgIH1cbiAgfVxufVxuIl19