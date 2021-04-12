import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from '../../../shared/interfaces/code-viewer.interface';
import { ValidateCpf } from 'projects/anutils/validators';

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
      <form [formGroup]="form">
        <h3>Input cpf mask</h3>
        <mat-form-field>
          <mat-label>Cpf</mat-label>
          <input matInput placeholder="xxx.xxx.xxx-xx" anutilsCpfMask formControlName="cpf" />
          <mat-error *ngIf="this.form.get('cpf')?.invalid">
            {{this.form.get('cpf')?.errors?.message}}
          </mat-error>
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'cpfValidators',
        componentImports: "import { ValidateCpf } from 'anutils/validators';",
        componentCode: `
         form: FormGroup;
        constructor() {
          this.form = new FormGroup({
            cpf: new FormControl(null, ValidateCpf),
          });
        }
        `,
      }),
    },
  ];
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      cpf: new FormControl(null, ValidateCpf),
    });
  }
}
