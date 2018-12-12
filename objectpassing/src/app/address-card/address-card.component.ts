import { Component, OnInit, Input } from '@angular/core';
import { Address } from './adresscard.model';

@Component({
  selector: 'app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

@Input('name')user:Address;
togbutton:boolean=false;

  toggle(){
      this.togbutton=!this.togbutton;
  }

  constructor() { }

  ngOnInit() {
  }

}
