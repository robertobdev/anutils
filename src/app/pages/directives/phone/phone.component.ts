import { Component } from '@angular/core';
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
      <form>
        <h3>Input phone mask</h3>
        <mat-form-field>
          <mat-label>Phone</mat-label>
          <input matInput placeholder="(xx) xxx-xxx-xxx" anutilsPhoneMask />
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent({ componentName: 'phoneMask' }),
    },
  ];
}
