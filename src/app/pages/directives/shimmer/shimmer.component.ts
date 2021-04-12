import { Component } from '@angular/core';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.scss'],
})
export class ShimmerComponent {
  flag = true;
  shimmerInfo = {
    width: '400px',
    height: '60px',
  };
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
    <div [anutilsShimmer]="flag" [anutilsShimmerInfo]="shimmerInfo">
      Shimmer test!
    </div>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'shimmer',
        componentCode: `  flag = true;
      shimmerInfo = {
        width: '400px',
        height: '60px',
      };`,
      }),
    },
    {
      title: 'styles.scss',
      code: `
        ...

        @import 'anutils/directives/shimmer/shimmer.scss';

        ...
      `,
    },
  ];

  constructor() {
    setTimeout(() => {
      this.flag = false;
    }, 5000);
  }

  handleFlag(): void {
    this.flag = !this.flag;
  }
}
