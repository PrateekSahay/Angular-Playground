import { Component } from '@angular/core';
import { TestService } from './test.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private svc:TestService, private http:HttpClient){
    this.svc.toPrint("Services working");
  }

  ngOnInit(){
    let obs=this.http.get('https://api.github.com/users/prateeksahay');
    obs.subscribe(()=>console.log('Got my first http call'));
    obs.subscribe((response)=>console.log(response));
  }

}
