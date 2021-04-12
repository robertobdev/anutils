import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { CodeViewerComponent } from './components/code-viewer/code-viewer.component';
import { MatTabsModule } from '@angular/material/tabs';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [CodeViewerComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTabsModule,
    HighlightModule,
    MatDatepickerModule,
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    CodeViewerComponent,
    MatTabsModule,
    HighlightModule,
    MatDatepickerModule,
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        fullLibraryLoader: () => import('highlight.js'),
      },
    },
  ],
})
export class SharedModule {}
