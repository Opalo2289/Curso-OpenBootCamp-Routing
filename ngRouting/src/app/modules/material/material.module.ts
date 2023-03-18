import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { MatInputModule} from '@angular/material/input'
import { MatCardModule} from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule
    
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    BrowserAnimationsModule
  ]
})
export class MaterialModule { }
