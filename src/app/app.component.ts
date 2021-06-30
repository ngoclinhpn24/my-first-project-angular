import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service';

import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  animations: [
    trigger('myanimation', [
        state('smaller', style({
            transform: 'translateY(80px)' // di chuyển thẳng lên trên theo trục Oy
        })),
        state('larger', style({
            transform: 'translateY(5px)' // nếu là 0px: di chuyển lại vị trí ban đầu
        })),
        // transition: định nghĩa các thông số hiển thị: độ dài, độ trễ khi chuyển từ trạng thái này -> trạng thái khác
        transition('smaller <=> larger', animate('400ms ease-in')) // animate: 500ms: tốc độ di chuyển của animation, càng lớn càng chậm
    ])
  ]
})
export class AppComponent {

  title = 'my-first-project';

  exp_pipe = 'Green Field';
  todayDate = new Date();
  propertyService = new String();
  username:any;
  formdata:any;

  // animation
  state: string = "smaller";
  animate(){
    // Nếu state đang là larger thì chuyển về smaller và ngược lại
    this.state = this.state == 'larger' ? 'smaller' : 'larger';
  }

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

      // thêm phần validator cho control username:
      // vd ở đây validate cho trường username với 3 <= length <= 20 + bắt buộc

      username: new FormControl("", Validators.compose([
        Validators.required, // bắt buộc
        Validators.minLength(3),
        Validators.maxLength(20)

      ])),

     // pwd: new FormControl("")

      // tự custom, độ dài min là 6 ký tự
      // kbao hàm pwdlengthValidator để ktra độ dài
      
      //pwd: new FormControl("", this.pwdLengthValidator)
      // username : new FormControl("fish123"),
      // password : new FormControl("123456a")
    });
  }

  onClickSubmit(data:any){
    this.username = data.username;
  }

  // custom phaan pwd
  // pwdLengthValidator(control:any){
  //     if(control.value.length < 6){
  //       return {
  //         pwd: true
  //       };
  //     }
  // }

}
