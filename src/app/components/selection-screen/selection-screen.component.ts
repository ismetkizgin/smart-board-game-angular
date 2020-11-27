import { Component, OnInit } from '@angular/core';
import { Board } from 'src/app/models';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
})
export class SelectionScreenComponent implements OnInit {
  constructor() {}
  _model: Board = new Board();
  creativeFormShowHide: boolean = false;

  ngOnInit(): void {}

  creativeFormToggle(){
    this.creativeFormShowHide = !this.creativeFormShowHide;
    if(this.creativeFormShowHide)
    document.getElementById("container").style.cssText = 'margin-top:80px !important'
    else
    document.getElementById("container").removeAttribute('style')
  }
}
