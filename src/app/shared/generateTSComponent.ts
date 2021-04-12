export function generateTSComponent(configs: {
  componentName: string;
  componentImports?: string;
  componentCode?: string;
}): string {
  const { componentName, componentImports = '', componentCode = '' } = configs;

  return `
    import { Component } from '@angular/core';
    ${componentImports}


    @Component({
      selector: '${componentName}-example',
      templateUrl: '${componentName}-example.html',
      styleUrls: ['${componentName}-example.css'],
    })

    export class ${componentName}Example {
      ${componentCode}
    }
  `;
}
