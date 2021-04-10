import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CpfMaskDirective } from './cpf-mask/cpf-mask.directive';
import { CnpjMaskDirective } from './cnpj-mask/cnpj-mask.directive';
import { PhoneMaskDirective } from './phone-mask/phone-mask.directive';
import { ZipCodeMaskDirective } from './zip-code-mask/zip-code-mask.directive';
import { ShimmerDirective } from './shimmer/shimmer.directive';
export class AnutilsDirectivesModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW51dGlscy1kaXJlY3RpdmVzLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2FudXRpbHMvZGlyZWN0aXZlcy9hbnV0aWxzLWRpcmVjdGl2ZXMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQy9FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBbUIvRCxNQUFNLE9BQU8sdUJBQXVCOzs7WUFqQm5DLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixpQkFBaUI7b0JBQ2pCLGtCQUFrQjtvQkFDbEIsb0JBQW9CO29CQUNwQixnQkFBZ0I7aUJBQ2pCO2dCQUNELE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQztnQkFDdkIsT0FBTyxFQUFFO29CQUNQLGdCQUFnQjtvQkFDaEIsaUJBQWlCO29CQUNqQixrQkFBa0I7b0JBQ2xCLG9CQUFvQjtvQkFDcEIsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDcGZNYXNrRGlyZWN0aXZlIH0gZnJvbSAnLi9jcGYtbWFzay9jcGYtbWFzay5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgQ25wak1hc2tEaXJlY3RpdmUgfSBmcm9tICcuL2NucGotbWFzay9jbnBqLW1hc2suZGlyZWN0aXZlJztcbmltcG9ydCB7IFBob25lTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vcGhvbmUtbWFzay9waG9uZS1tYXNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBaaXBDb2RlTWFza0RpcmVjdGl2ZSB9IGZyb20gJy4vemlwLWNvZGUtbWFzay96aXAtY29kZS1tYXNrLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTaGltbWVyRGlyZWN0aXZlIH0gZnJvbSAnLi9zaGltbWVyL3NoaW1tZXIuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQ3BmTWFza0RpcmVjdGl2ZSxcbiAgICBDbnBqTWFza0RpcmVjdGl2ZSxcbiAgICBQaG9uZU1hc2tEaXJlY3RpdmUsXG4gICAgWmlwQ29kZU1hc2tEaXJlY3RpdmUsXG4gICAgU2hpbW1lckRpcmVjdGl2ZSxcbiAgXSxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBDcGZNYXNrRGlyZWN0aXZlLFxuICAgIENucGpNYXNrRGlyZWN0aXZlLFxuICAgIFBob25lTWFza0RpcmVjdGl2ZSxcbiAgICBaaXBDb2RlTWFza0RpcmVjdGl2ZSxcbiAgICBTaGltbWVyRGlyZWN0aXZlLFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBbnV0aWxzRGlyZWN0aXZlc01vZHVsZSB7fVxuIl19