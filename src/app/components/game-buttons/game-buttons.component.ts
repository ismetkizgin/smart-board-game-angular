import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../utils';

@Component({
  selector: 'app-game-buttons',
  templateUrl: './game-buttons.component.html',
  styleUrls: ['./game-buttons.component.scss'],
})
export class GameButtonsComponent implements OnInit {
  constructor(private _router: Router, private _socketService: SocketService) {}
  @Input() playerID: number;
  exitButtonControl: boolean = !this._router.isActive('game/multiplayer', true);
  _socket = this._socketService.connection;

  ngOnInit(): void {}
  refresh() {
    window.location.reload();
  }

  getOutGame() {
    this._socket.emit('getOutGame', this.playerID);
  }
}
