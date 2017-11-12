import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Hero } from './Hero';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  availableTests: Hero[] = [];
  constructor(private http: Http) {  }

  ngOnInit():void {
    this.getHeroes()
      .then(heroes => this.availableTests = heroes);
  }

  getStatusClass(status):String{
    switch (status){
      case 'Active': 
        return 'active-status';
      case 'Disabled':
        return 'disbale-status';
      case 'Progress':
        return 'progress-status';        
    }
  }

  getHeroes(): Promise<Hero[]> {
        return this.http.get(`../../assets/tests.json`)
               .toPromise()
               .then(response => response.json() as Hero[]);
  }
}
