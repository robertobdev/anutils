import {
  Directive,
  HostBinding,
  Input,
  ElementRef,
  OnChanges,
} from '@angular/core';
import { IShimmer } from './shimmer.interface';

@Directive({
  selector: '[anutilsShimmer]',
})
export class ShimmerDirective implements OnChanges {
  @Input() anutilsShimmer: boolean;
  @Input() anutilsShimmerInfo: IShimmer;

  @HostBinding('class.shimmer') get shimmer(): boolean {
    return this.anutilsShimmer;
  }
  constructor(private el: ElementRef) {}

  ngOnChanges(): void {
    if (this.anutilsShimmer) {
      this.el.nativeElement.style.width = this.anutilsShimmerInfo.width;
      this.el.nativeElement.style.height = this.anutilsShimmerInfo.height;
    } else {
      this.el.nativeElement.style.width = 'auto';
      this.el.nativeElement.style.height = 'auto';
    }
  }
}
