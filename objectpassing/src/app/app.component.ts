import { Component } from '@angular/core';
import { Address } from './address-card/adresscard.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    user:Address;
    initialValue:string="Jai";
    constructor(){
      this.user=new Address();
      this.user.name="Prateek";
      this.user.address="Zolo Eclair";
      this.user.designation="Associate Software Engineer";
      this.user.phone=["9876543210","9870987654"];
    }
}
