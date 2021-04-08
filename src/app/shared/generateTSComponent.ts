export function generateTSComponent(componentName: string): string {
  return `
    import {Component} from '@angular/core';
    @Component({
      selector: '${componentName}-example',
      templateUrl: '${componentName}-example.html',
      styleUrls: ['${componentName}-example.css'],
    })
    export class ${componentName}Example {}
  `;
}
