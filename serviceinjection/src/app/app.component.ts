import { Component } from '@angular/core';
import { FirstserviceService } from './firstservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

constructor(private svc:FirstserviceService){

      svc.printToConsole("printing on console");

}
}
