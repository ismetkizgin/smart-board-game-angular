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

  ngOnInit(): void {}
}
