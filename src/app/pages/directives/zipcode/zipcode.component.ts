import { Component } from '@angular/core';
import { generateTSComponent } from 'src/app/shared/generateTSComponent';
import { CodeViewer } from 'src/app/shared/interfaces/code-viewer.interface';

@Component({
  selector: 'app-zipcode',
  templateUrl: './zipcode.component.html',
  styleUrls: ['./zipcode.component.scss'],
})
export class ZipcodeComponent {
  codeViewers: CodeViewer[] = [
    {
      title: 'Html',
      code: `
      <form>
        <h3>Input zipCode mask</h3>
        <mat-form-field>
          <mat-label>Zip Code</mat-label>
          <input matInput placeholder="xxxxx-xxx" anutilsZipCodeMask />
        </mat-form-field>
      </form>`,
    },
    {
      title: 'TS',
      code: generateTSComponent('zipCodeMask'),
    },
  ];
}
