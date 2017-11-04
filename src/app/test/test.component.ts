import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Questions } from './Questions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  questions: Questions[] = [];
  answer: string;
  // private questions;
  constructor(private http: Http) { }

  ngOnInit():void {
    this.getQuestion()
      .then(questions => this.questions = questions);
  }

  getQuestion(): Promise<Questions[]> {
    return this.http.get('../../assets/questions.json')
           .toPromise()
           .then(response => response.json()) ;
  }
}
