import { Component, OnInit } from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {MatSnackBar} from '@angular/material';
import { Questions } from './Questions';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  questions: Questions;
  answer: string;

  private _testEndsAt;
  public _countDown;

  constructor(private http: Http, public snackBar: MatSnackBar) { }

  ngOnInit():void {
    // need to import (import 'rxjs/add/operator/toPromise';)
    // this.getQuestion()
    //   .then(questions => this.questions = questions);

    //   this._testEndsAt = 1;
    //   var seconds = 60;
    //   var minutes = this._testEndsAt;
    //   const timer = Observable.interval(1000).map((x) => {
    //   }).subscribe((x) => {
    //       seconds = this.checkSecond(seconds - 1);
    //       if(seconds == 59) {minutes = minutes-1};
    //       if(minutes == 0 && seconds == 0) {
    //         timer.unsubscribe();
    //         this.openSnackBar();
    //       };
    //       this._countDown = minutes + " Min : " + seconds + " Sec";
    //   });   
    this.getQuestion().subscribe(
      data => {
        this.questions = data;

        // to display count down timer
        this._testEndsAt = 1;
        var seconds = 60;
        var minutes = this._testEndsAt;
        const timer = Observable.interval(1000).map((x) => {
        }).subscribe((x) => {
            seconds = this.checkSecond(seconds - 1);
            if(seconds == 59) {minutes = minutes-1};
            if(minutes == 0 && seconds == 0) {
              timer.unsubscribe();
              this.openSnackBar();
            };
            this._countDown = minutes + " Min : " + seconds + " Sec";
        });  
        // console.log(this.questions);
      }
    );
  }

  openSnackBar() {
    this.snackBar.open("Your time is up", "Close", {
      duration: 5000,
    });
  }

  checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
  }

  // getQuestion(): Promise<Questions[]> {
  //   return this.http.get('./assets/questions.json')
  //          .toPromise()
  //          .then(response => response.json()) ;
  // }

  getQuestion() {
    return this.http.get('./assets/questions.json')
        .map(data => {
            data.json();
            return data.json();
    });
}
}
