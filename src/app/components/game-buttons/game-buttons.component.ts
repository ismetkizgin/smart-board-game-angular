import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.scss']
})
export class GameButtonsComponent implements OnInit {

  constructor(
    private _router: Router,
  ) { }

  exitButtonControl: boolean = !this._router.isActive('game/multiplayer', true);

  ngOnInit(): void {
  }
  refresh() {
    window.location.reload();
  }

}
