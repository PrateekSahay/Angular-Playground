import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
    toPrint(argument){
      console.log(argument);
    }
}
