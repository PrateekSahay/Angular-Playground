import { Component, OnInit } from '@angular/core';
//import { watch } from 'fs';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  Datemessage :string;

  constructor() {
      setInterval(()=>{
      let currentinfo=new Date();
      this.Datemessage=currentinfo.toDateString()+ " "+ currentinfo.toLocaleTimeString();}
      ,1000);
      
   }

  ngOnInit() {
  }

}
