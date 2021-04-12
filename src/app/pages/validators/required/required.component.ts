import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateRequired } from 'projects/anutils/validators';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-required',
  templateUrl: './required.component.html',
  styleUrls: ['./required.component.scss'],
})
export class RequiredComponent {
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
      <form [formGroup]="form">
        <h3>Input age required</h3>
        <mat-form-field>
          <mat-label>Age</mat-label>
          <input matInput formControlName="age" required/>
          <mat-error *ngIf="this.form.get('age')?.invalid">{{
            this.form.get('age')?.errors?.message
          }}</mat-error>
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'requiredValidators',
        componentImports:
          "import { ValidateRequired } from 'anutils/validators';",
        componentCode: `
         form: FormGroup;
        constructor() {
          this.form = new FormGroup({
            age: new FormControl(null, ValidateRequired),
          });
        }
        `,
      }),
    },
  ];
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      age: new FormControl(null, ValidateRequired),
    });
  }
}
