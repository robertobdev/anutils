import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidatePhone } from 'projects/anutils/validators';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss'],
})
export class PhoneComponent {
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
      <form [formGroup]="form">
        <h3>Input phone with validator</h3>
        <mat-form-field>
          <mat-label>Phone</mat-label>
          <input
            matInput
            placeholder="(xx) xxx-xxx-xxx"
            anutilsPhoneMask
            formControlName="phone"
          />
          <mat-error *ngIf="this.form.get('phone')?.invalid">{{
            this.form.get('phone')?.errors?.message
          }}</mat-error>
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'phoneValidators',
        componentImports: "import { ValidatePhone } from 'anutils/validators';",
        componentCode: `
         form: FormGroup;
        constructor() {
          this.form = new FormGroup({
            phone: new FormControl(null, ValidatePhone),
          });
        }
        `,
      }),
    },
  ];
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      phone: new FormControl(null, ValidatePhone),
    });
  }
}
