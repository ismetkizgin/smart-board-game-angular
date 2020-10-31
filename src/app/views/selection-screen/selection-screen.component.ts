import { Component, OnInit } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import {Board}from '../../models';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss']
})
export class SelectionScreenComponent implements OnInit {

  constructor() { }

  _model:Board=new Board();
  ngOnInit(): void {
    
  }

}
