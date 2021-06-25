import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  // mang cac thang
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  // bien de an hien noi dung can hien thi
  isavailable = false;

  // sự kiện
  myClickFunction() { 
    alert("Submit");
    // console.log(event);
    this.isavailable = false;
  }

  changemonths() {
    //console.log("Changed month");
    // console.log(event);

    alert("You changed month");
  }
}
