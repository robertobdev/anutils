import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateCnpj } from 'projects/anutils/validators';
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
      <form [formGroup]="form">
        <h3>Input cnpj with validator</h3>
        <mat-form-field>
          <mat-label>Cnpj</mat-label>
          <input
            matInput
            placeholder="xx.xxx.xxx/xxxx-xx" anutilsCnpjMask
            formControlName="cnpj"
          />
          <mat-error *ngIf="this.form.get('cnpj')?.invalid">{{
            this.form.get('cnpj')?.errors?.message
          }}</mat-error>
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'cnpjValidators',
        componentImports: "import { ValidateCnpj } from 'anutils/validators';",
        componentCode: `
         form: FormGroup;
        constructor() {
          this.form = new FormGroup({
            cnpj: new FormControl(null, ValidateCnpj),
          });
        }
        `,
      }),
    },
  ];
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      cnpj: new FormControl(null, ValidateCnpj),
    });
  }
}
