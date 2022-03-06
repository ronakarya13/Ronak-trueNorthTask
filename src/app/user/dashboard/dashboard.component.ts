import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 name : any;
  constructor() {
    
  this.name = 'Angular ' + VERSION.major;
   }

  ngOnInit() {
  }

}