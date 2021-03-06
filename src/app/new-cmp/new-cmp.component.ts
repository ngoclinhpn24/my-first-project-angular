import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-new-cmp',
  templateUrl: './new-cmp.component.html',
  styleUrls: ['./new-cmp.component.css']
})
export class NewCmpComponent implements OnInit {

  days = ["Sunday", "Monday", "Tuesday"];
  todayDate = new Date();
  propertyService = new String();

  constructor(private myservice: MyserviceService) { }

  ngOnInit(): void {
    this.todayDate = this.myservice.getTodayDate();
    this.myservice.myProperty = "new component";
    this.propertyService = this.myservice.myProperty;
  }

}
