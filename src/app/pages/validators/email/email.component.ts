import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateEmail } from 'projects/anutils/validators';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
})
export class EmailComponent {
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
      <form [formGroup]="form">
        <h3>Input email with validator</h3>
        <mat-form-field>
          <mat-label>Email</mat-label>
          <input
            matInput
            placeholder="example@mail.com"
            formControlName="email"
          />
          <mat-error *ngIf="this.form.get('email')?.invalid">{{
            this.form.get('email')?.errors?.message
          }}</mat-error>
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'emailValidators',
        componentImports: "import { ValidateEmail } from 'anutils/validators';",
        componentCode: `
         form: FormGroup;
        constructor() {
          this.form = new FormGroup({
            email: new FormControl(null, ValidateEmail),
          });
        }
        `,
      }),
    },
  ];
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      email: new FormControl(null, ValidateEmail),
    });
  }
}
