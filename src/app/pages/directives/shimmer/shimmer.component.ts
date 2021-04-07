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
      <form>
        <h3>Input cnpj mask</h3>
        <mat-form-field>
          <mat-label>Cnpj</mat-label>
          <input matInput placeholder="xx.xxx.xxx/xxxx-xx" anutilsCnpjMask />
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent('cnpjMask'),
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
