import { Directive, HostListener, ElementRef } from '@angular/core';
export class ZipCodeMaskDirective {
    constructor(el) {
        this.el = el;
        this.previousValue = '';
    }
    setMask() {
        const element = this.el.nativeElement;
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
    ngOnInit() {
        setTimeout(() => this.setMask(), 0);
    }
    createMask(zipCode) {
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
ZipCodeMaskDirective.decorators = [
    { type: Directive, args: [{
                selector: '[anutilsZipCodeMask]',
            },] }
];
ZipCodeMaskDirective.ctorParameters = () => [
    { type: ElementRef }
];
ZipCodeMaskDirective.propDecorators = {
    setMask: [{ type: HostListener, args: ['ngModelChange',] }, { type: HostListener, args: ['input',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiemlwLWNvZGUtbWFzay5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9hbnV0aWxzL2RpcmVjdGl2ZXMvemlwLWNvZGUtbWFzay96aXAtY29kZS1tYXNrLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFLNUUsTUFBTSxPQUFPLG9CQUFvQjtJQUcvQixZQUFvQixFQUFjO1FBQWQsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUYxQixrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQUVVLENBQUM7SUFJdEMsT0FBTztRQUNMLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBaUMsQ0FBQztRQUMxRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN4QyxPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUMxQixPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDMUMsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDZCxPQUFPLENBQUMsYUFBYSxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDNUMsQ0FBQyxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7SUFFRCxRQUFRO1FBQ04sVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsVUFBVSxDQUFDLE9BQWU7UUFDeEIsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNYO1FBRUQsSUFBSSxPQUFPLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN2QixPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDckMsT0FBTyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBRUQsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUM5QixDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7YUFDakM7OztZQUppQyxVQUFVOzs7c0JBVXpDLFlBQVksU0FBQyxlQUFlLGNBQzVCLFlBQVksU0FBQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0TGlzdGVuZXIsIEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbYW51dGlsc1ppcENvZGVNYXNrXScsXG59KVxuZXhwb3J0IGNsYXNzIFppcENvZGVNYXNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlID0gJyc7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZikge31cblxuICBASG9zdExpc3RlbmVyKCduZ01vZGVsQ2hhbmdlJylcbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBzZXRNYXNrKCk6IHZvaWQge1xuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb25zdCBtYXNrID0gdGhpcy5jcmVhdGVNYXNrKGVsZW1lbnQudmFsdWUpO1xuICAgIGlmIChlbGVtZW50LnZhbHVlICE9PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcbiAgICAgIGVsZW1lbnQudmFsdWUgPSBtYXNrO1xuICAgICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gbWFzaztcbiAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGVsZW1lbnQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldE1hc2soKSwgMCk7XG4gIH1cblxuICBjcmVhdGVNYXNrKHppcENvZGU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHppcENvZGUubGVuZ3RoID09IDApIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICBpZiAoemlwQ29kZS5sZW5ndGggPD0gOSkge1xuICAgICAgemlwQ29kZSA9IHppcENvZGUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICAgIHppcENvZGUgPSB6aXBDb2RlLnJlcGxhY2UoL14oXFxkezV9KShcXGQpLywgJyQxLSQyJyk7XG4gICAgICByZXR1cm4gemlwQ29kZTtcbiAgICB9XG5cbiAgICByZXR1cm4gemlwQ29kZS5zdWJzdHIoMCwgOSk7XG4gIH1cbn1cbiJdfQ==