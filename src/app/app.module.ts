import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputMatrixComponent } from './input-matrix/input-matrix.component';
import { TheMatrixComponent } from './the-matrix/the-matrix.component';

@NgModule({
  declarations: [AppComponent, InputMatrixComponent, TheMatrixComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
