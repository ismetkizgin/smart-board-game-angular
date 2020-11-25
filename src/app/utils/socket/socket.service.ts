import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  _socket: any;
  constructor() {
    this._socket = io(environment.socketApiEntpoint);
  }

  public get connection() {
    return this._socket;
  }
}
