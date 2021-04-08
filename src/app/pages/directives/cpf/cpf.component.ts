import { Component } from '@angular/core';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from '../../../shared/interfaces/code-viewer.interface';
@Component({
  selector: 'app-cpf',
  templateUrl: './cpf.component.html',
  styleUrls: ['./cpf.component.scss'],
})
export class CpfComponent {
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
      <form>
        <h3>Input cpf mask</h3>
        <mat-form-field>
          <mat-label>Cpf</mat-label>
          <input matInput placeholder="xxx.xxx.xxx-xx" anutilsCpfMask />
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent('cpfMask'),
    },
  ];
}
