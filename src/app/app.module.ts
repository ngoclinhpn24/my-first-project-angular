import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NameofthedirectiveDirective } from './nameofthedirective.directive';
import { ChangeTextDirective } from './change-text.directive';

// animation
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Material  sidenav + menu
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';


// material date: hiển thị ngày tháng
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';


// import http module
// import { HttpClientM}
import {HttpClientModule} from '@angular/common/http';
//import { HttpModule} from '@angular/http';

// Đường dẫn của sqrt pipe
import { SqrtPipe } from './app.sqrt';
import { Router, RouterModule } from '@angular/router';
import { MyserviceService } from './myservice.service';

// Form 
import { FormsModule} from '@angular/forms';
// import để viết code theo Model Driven Form
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NewCmpComponent,
    NameofthedirectiveDirective,
    ChangeTextDirective,

    // Khai báo sqrt pipe
    SqrtPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, // model driven form
    BrowserAnimationsModule,

    MatButtonModule,
    MatSidenavModule,
    MatMenuModule,

    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,

   // Cài đặt cho router: path nào tương ứng với component nào

    RouterModule.forRoot([
      {
        path: 'new-cmp', // path: đường dẫn
        component: NewCmpComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
