import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule} from '@angular/material';
import { MatGridListModule } from '@angular/material';
import { MatNativeDateModule, MatDatepickerModule } from '@angular/material';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsertableComponent } from './components/usertable/usertable.component';

@NgModule({
  declarations: [
    AppComponent,
    UsertableComponent
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
    MatTableModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatPaginatorModule,
    NgbModule.forRoot()
  ],
  providers: [UserService, MatDatepickerModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
