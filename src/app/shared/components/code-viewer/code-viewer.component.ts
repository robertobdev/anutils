import { Component, Input } from '@angular/core';
import { CodeViewer } from '../../interfaces/code-viewer.interface';

@Component({
  selector: 'app-code-viewer',
  templateUrl: './code-viewer.component.html',
  styleUrls: ['./code-viewer.component.scss'],
})
export class CodeViewerComponent {
  @Input() codeViewers: CodeViewer[] = [];
}
