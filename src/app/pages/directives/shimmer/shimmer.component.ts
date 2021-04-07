import { Component, OnInit } from '@angular/core';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-shimmer',
  templateUrl: './shimmer.component.html',
  styleUrls: ['./shimmer.component.scss'],
})
export class ShimmerComponent implements OnInit {
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
      code: `
    import {Component} from '@angular/core';

    @Component({
      selector: 'shimmer-example',
      templateUrl: 'shimmer-example.html',
      styleUrls: ['shimmer-example.css'],
    })
    export class shimmerExample {
      flag = true;
      shimmerInfo = {
        width: '400px',
        height: '60px',
      };
    }
  `,
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

  ngOnInit(): void {}

  handleFlag(): void {
    this.flag = !this.flag;
  }
}
