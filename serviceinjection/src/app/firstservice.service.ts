import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstserviceService {
      printToConsole(arg){
        console.log(arg);
      }
}
