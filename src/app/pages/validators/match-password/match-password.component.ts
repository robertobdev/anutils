import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ValidateMatchPassword } from 'projects/anutils/validators';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-match-password',
  templateUrl: './match-password.component.html',
  styleUrls: ['./match-password.component.scss'],
})
export class MatchPasswordComponent implements OnInit {
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
      <form [formGroup]="form">
        <h3>Input password and confirm password with match validator</h3>
        <mat-form-field>
          <mat-label>Password</mat-label>
          <input matInput formControlName="password" type="password" />
          <mat-error *ngIf="this.form.get('password')?.invalid">{{
            this.form.get('password')?.errors?.message
          }}</mat-error>
        </mat-form-field>
        <mat-form-field>
          <mat-label>Confirm password</mat-label>
          <input matInput formControlName="confirmPassword" type="password" />
          <mat-error *ngIf="this.form.get('confirmPassword')?.invalid">{{
            this.form.get('confirmPassword')?.errors?.message
          }}</mat-error>
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({
        componentName: 'matchPasswordsValidators',
        componentImports:
          "import { ValidateMatchPassword } from 'anutils/validators';",
        componentCode: `
         form: FormGroup;
        constructor() {
          this.form = new FormGroup({
            password: new FormControl(null),
            confirmPassword: new FormControl(null),
          });
        }

        ngOnInit(): void {
          const password = this.form.get('password');
          this.form
            .get('confirmPassword')
            ?.setValidators(ValidateMatchPassword(password));
        }
        `,
      }),
    },
  ];
  form: FormGroup;
  constructor() {
    this.form = new FormGroup({
      password: new FormControl(null),
      confirmPassword: new FormControl(null),
    });
  }

  ngOnInit(): void {
    const password = this.form.get('password');
    this.form
      .get('confirmPassword')
      ?.setValidators(ValidateMatchPassword(password));
  }
}
