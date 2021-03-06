import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[anutilsCnpjMask]',
})
export class CnpjMaskDirective implements OnInit {
  private previousValue = '';

  constructor(private el: ElementRef) {}

  @HostListener('input')
  setMask(): void {
    const element = this.el.nativeElement as HTMLInputElement;
    const mask = this.createMask(element.value);
    if (element.value !== this.previousValue) {
      element.value = mask;
      this.previousValue = mask;
      element.dispatchEvent(new Event('input'));
    }
  }

  ngOnInit(): void {
    setTimeout(() => this.setMask(), 0);
  }

  createMask(cnpj: string): string {
    let newVal = cnpj.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,2})(.*)/, '$1.$2');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,3})(.*)/, '$1.$2.$3');
    } else if (newVal.length <= 13) {
      newVal = newVal.replace(
        /^(\d{0,2})(\d{0,3})(\d{0,3})(.*)/,
        '$1.$2.$3/$4'
      );
    } else {
      newVal = newVal.replace(
        /^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(.*)/,
        '$1.$2.$3/$4-$5'
      );
    }
    return newVal.substr(0, 18);
  }
}
