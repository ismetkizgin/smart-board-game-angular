import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameModeControlService {
  constructor() {}

  boardSizeAndNumberOfStoneControl(boardSize: number, numberOfStone: number) {
    if (
      !this.boardSizeControl(boardSize) ||
      this.maxNumberOfStone(boardSize) > numberOfStone ||
      numberOfStone < 2
    )
      return false;

    return true;
  }

  boardSizeControl(boardSize: number) {
    if (boardSize >= 5 && 9 <= boardSize) return true;

    return false;
  }

  maxNumberOfStone(boardSize: number) {
    return Math.floor(Math.pow(boardSize, 2) / 3);
  }
}
