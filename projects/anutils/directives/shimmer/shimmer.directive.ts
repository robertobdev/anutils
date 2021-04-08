import { Directive, HostBinding, Input, OnChanges } from '@angular/core';
import { IShimmer } from './shimmer.interface';

@Directive({
  selector: '[anutilsShimmer]',
})
export class ShimmerDirective implements OnChanges {
  @Input() anutilsShimmer = false;
  @Input() anutilsShimmerInfo: IShimmer = { width: '0', height: '0' };

  @HostBinding('class.shimmer') get shimmer(): boolean {
    return this.anutilsShimmer;
  }

  @HostBinding('style.width') width: string | undefined;
  @HostBinding('style.height') height: string | undefined;

  ngOnChanges(): void {
    if (this.anutilsShimmer) {
      this.width = this.anutilsShimmerInfo.width;
      this.height = this.anutilsShimmerInfo.height;
    } else {
      this.width = 'auto';
      this.height = 'auto';
    }
  }
}
