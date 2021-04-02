import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[anutilsZipCodeMask]',
})
export class ZipCodeMaskDirective implements OnInit {
  private previousValue: any = null;

  constructor(private el: ElementRef) {}

  @HostListener('ngModelChange')
  @HostListener('input')
  setMask(): void {
    const mask = this.createMask(this.el.nativeElement.value);
    if (this.el.nativeElement.value !== this.previousValue) {
      this.el.nativeElement.value = mask;
      this.previousValue = mask;
      this.el.nativeElement.dispatchEvent(new Event('input'));
      setTimeout(() => {
        this.el.nativeElement.dispatchEvent(new Event('input'));
      });
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.setMask(), 0);
  }

  createMask(zipCode: string): string {
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
