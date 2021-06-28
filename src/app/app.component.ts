import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-project';

  exp_pipe = 'Green Field';
  todayDate = new Date();
  //propertyService;

  jsonVal = {name: 'A', age:'20', add:{a1:'Ha Noi', a2:'Thanh Xuan'}};
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

  // thay đổi constructor, thêm service
  constructor(private myservie: MyserviceService){}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // gọi service qua this.myservie.getTodayDate() -> sau đó gán dữ liệu vào todayDate
    this.todayDate = this.myservie.getTodayDate();
    
    // thay đổi giá triij của thuộc tính service 
    this.myservie.myProperty = "component creted";

    // Lấy giá trị thuộc tính service ra
    //this.propertyService =  this.myservie.myProperty;
    
  }

}
