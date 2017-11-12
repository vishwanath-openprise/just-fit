import { Component, OnInit } from '@angular/core';

import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {
  userId: number;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe((params: Params) => {
        this.userId = params['id'];        //contains the test id.
      });
  }

}
