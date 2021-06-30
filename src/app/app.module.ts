import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { NameofthedirectiveDirective } from './nameofthedirective.directive';
import { ChangeTextDirective } from './change-text.directive';

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
    ReactiveFormsModule,

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
