import { SocketService } from '../../utils';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-multiplayer-screen',
  templateUrl: './multiplayer-screen.component.html',
  styleUrls: ['./multiplayer-screen.component.scss'],
})
export class MultiplayerScreenComponent implements OnInit {
  constructor(private _socketService: SocketService) {}
  @Output() PlayerID = new EventEmitter();

  playerID: number = Math.floor(Math.random() * 100000) + 1000;
  _socket = this._socketService.connection;
  readyControl: boolean = false;

  ngOnInit(): void {}

  ready() {
    this.readyControl = true;
    this._socket.emit('ready', this.playerID);
    this.PlayerID.emit(this.playerID);
  }

  notReady() {
    this.readyControl = false;
    this._socket.emit('cancel', this.playerID);
  }
}
