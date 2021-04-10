import {
  Directive,
  HostListener,
  ElementRef,
  OnInit,
  Input,
} from '@angular/core';

@Directive({
  selector: '[anutilsPhoneMask]',
})
export class PhoneMaskDirective implements OnInit {
  @Input('anutilsPhoneMask') maskType: number | string | undefined;
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

  createMask(phone: string): string {
    phone = phone.replace(/\D/g, '');
    if (phone.length == 0) {
      return '';
    }
    if (phone.length <= 2) {
      return phone.replace(/^(\d{0,2})/, '($1');
    }
    if (phone.length <= 7) {
      return phone.replace(/^(\d{0,2})(.*)/, '($1) $2');
    }
    if (phone.length <= 10 && this.maskType == 9) {
      return phone.replace(/^(\d{0,2})(\d{0,5})(.*)/, '($1) $2-$3');
    }
    if (phone.length <= 10) {
      return phone.replace(/^(\d{0,2})(\d{0,4})(.*)/, '($1) $2-$3');
    }
    return phone
      .replace(/^(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,3})/, '($1) $2-$3-$4')
      .substr(0, 16);
  }
}
