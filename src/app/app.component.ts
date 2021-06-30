import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'my-first-project';

  exp_pipe = 'Green Field';
  todayDate = new Date();
  propertyService = new String();
  username:any;
  formdata:any;

  jsonVal = {name: 'A', age:'20', add:{a1:'Ha Noi', a2:'Thanh Xuan'}};
  // mang cac thang
  months = ["January", "Feburary", "March", "April", "May", 
  "June", "July", "August", "September",
  "October", "November", "December"];

  // bien de an hien noi dung can hien thi
  isavailable = false;

  // click form dang nhap, data truyền vào chính là giá trị của form userlogin(userlogin.value) bên html

  // onClickSubmit(data:any){
  //     alert("Entered Username: " + data.username);
  // }

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
  //constructor(private myservie: MyserviceService){}

  constructor(private http: HttpClient){}
  results:any;
  test = 2;
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    // gọi service qua this.myservie.getTodayDate() -> sau đó gán dữ liệu vào todayDate
        // this.todayDate = this.myservie.getTodayDate();
    
    // thay đổi giá triij của thuộc tính service 
        //this.myservie.myProperty = "App component";

    // Lấy giá trị thuộc tính service ra
        //this.propertyService =  this.myservie.myProperty;

    // http Client
    // this.http.get(): tạo ra 1 request đến địa chỉ https://...
    // khi dữ liệu trả về => thực hiện xử lý thông qua phương thức subscribe
    //this.http.get("https://60ae0d5e80a61f00173324bc.mockapi.io/colors").subscribe((data) => console.log(data))
    this.http.get("https://60ae0d5e80a61f00173324bc.mockapi.io/colors").subscribe((data) => {
        console.log(data);
        this.results = data; // hiển thị ra màn hình
    })

    this.formdata = new FormGroup({
      username : new FormControl("fish123"),
      password : new FormControl("123456a")
    });
  }

  onClickSubmit(data:any){
    this.username = data.username;
  }

}
