import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {FormsModule} from "@angular/forms";
import {StyleDirective} from "./directives/style.directive";
import { IfnotDirective } from './directives/ifnot.directive';
import {MultByPipe} from "./pipes/mult-by.pipe";
import { ExMarksPipe } from './pipes/ex-marks.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StyleDirective,
    IfnotDirective,
    MultByPipe,
    ExMarksPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
