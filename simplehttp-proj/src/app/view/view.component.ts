import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  username:string="";
  response:any;

  constructor(private http:HttpClient) { }

  ngOnInit() {
  }

  showdetails(){
      this.http.get('https://api.github.com/users/' + this.username)
      .subscribe((response)=>{
        this.response=response;
        console.log(response);
    })
  }

}
