import { Component } from '@angular/core';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-cnpj',
  templateUrl: './cnpj.component.html',
  styleUrls: ['./cnpj.component.scss'],
})
export class CnpjComponent {
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
      code: generateTSComponent({ componentName: 'cnpjMask' }),
    },
  ];
}
