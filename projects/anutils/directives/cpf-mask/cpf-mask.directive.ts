import { Directive, HostListener, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[anutilsCpfMask]',
})
export class CpfMaskDirective implements OnInit {
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

  createMask(cpf: string): string {
    let newVal = cpf.replace(/\D/g, '');
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 3) {
      newVal = newVal.replace(/^(\d{0,3})/, '$1');
    } else if (newVal.length <= 6) {
      newVal = newVal.replace(/^(\d{0,3})(.*)/, '$1.$2');
    } else if (newVal.length <= 9) {
      newVal = newVal.replace(/^(\d{0,3})(\d{0,3})(.*)/, '$1.$2.$3');
    } else {
      newVal = newVal.replace(
        /^(\d{0,3})(\d{0,3})(\d{0,3})(.*)/,
        '$1.$2.$3-$4'
      );
    }
    return newVal.substr(0, 14);
  }
}
