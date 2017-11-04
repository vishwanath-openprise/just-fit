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
  heroes: Hero[] = [];
  constructor(private http: Http) {  }

  ngOnInit():void {
    this.getHeroes()
      .then(heroes => this.heroes = heroes);
  }

  getStatusClass(status):String{
    switch (status){
      case 'active': 
        return 'active-status';
      case 'disabled':
        return 'disbale-status';
      case 'progress':
        return 'progress-status';        
    }
  }

  getHeroes(): Promise<Hero[]> {
        return this.http.get(`../../assets/tests.json`)
               .toPromise()
               .then(response => response.json() as Hero[]);
  }
}
