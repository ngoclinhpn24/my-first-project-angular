import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  // thêm thuộc tính property
  myProperty = "Service Created";


  constructor() { }

  // lấy ra ngày hôm nay
  getTodayDate(){
    let gdate = new Date();
    return gdate;
  }
}
