import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  User: any;
  @Input('name')_userName: string;

  constructor() {

   }

  ngOnInit() {

    this.User={
      //Name:"Prateek",
      Name:this._userName,
      Address:"Zolo Eclair",
      Designation:"Associate Software Engineer",
      Phone:[9876556789,
             9009080080,
             7653424512,"ss" ],
    };

  }

}
