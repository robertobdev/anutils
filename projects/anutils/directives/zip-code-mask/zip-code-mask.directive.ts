import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[anutilsZipCodeMask]',
})
export class ZipCodeMaskDirective implements OnInit {
  private previousValue = '';

  constructor(private el: ElementRef) {}

  @HostListener('ngModelChange')
  @HostListener('input')
  setMask(): void {
    const element = this.el.nativeElement as HTMLInputElement;
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
