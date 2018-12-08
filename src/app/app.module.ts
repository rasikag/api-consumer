import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    DatepickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatGridListModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
