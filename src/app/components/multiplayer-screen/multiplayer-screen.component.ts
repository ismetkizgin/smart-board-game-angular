import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../utils';

@Component({
  selector: 'app-multiplayer-screen',
  templateUrl: './multiplayer-screen.component.html',
  styleUrls: ['./multiplayer-screen.component.scss'],
})
export class MultiplayerScreenComponent implements OnInit {
  constructor(private _socketService: SocketService) {}

  playerID: number = Math.floor(Math.random() * 100000) + 1000;
  _socket = this._socketService.connection;
  readyControl: boolean = false;

  ngOnInit(): void {}

  ready() {
    this.readyControl = true;
    this._socket.emit('ready', this.playerID);
    console.log('hello word');
  }
}
