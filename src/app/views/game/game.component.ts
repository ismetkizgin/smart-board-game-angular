import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(private _activatedRoute: ActivatedRoute) {}

  boardSizeArray: Array<number>;
  stonePositions: Array<number>;
  boardSize: number;
  onSubmit: Function = this.mainStoneSelection;
  mainStone: number;
  selectBoxID: number;
  ngOnInit(): void {
    this.boardSize = parseInt(
      this._activatedRoute.snapshot.paramMap.get('BoardSize')
    );
    const NumberOfStones = parseInt(
      this._activatedRoute.snapshot.paramMap.get('NumberOfStones')
    );
    this.boardSizeArray = Array(this.boardSize)
      .fill(null)
      .map((x, i) => i);

    this.stonePositions = this.randomStoneLaying(
      NumberOfStones,
      Math.pow(this.boardSize, 2)
    );

    this.boardSize = this.boardSizeArray.length * this.boardSizeArray.length;
  }

  mainStoneSelection(boxID: number) {
    this.mainStone = boxID;
    this.onSubmit = this.stoneMovement;
  }

  stoneMovement(boxID: number) {
    for (let i = 0; i < this.boardSize; i++) {
      document.getElementById(`box${i}`).classList.remove('board__box__green');
    }
    if (this.mainStone != boxID) {
      const selectBox: any = document.getElementById(`box${boxID}`);
      if (selectBox.getElementsByTagName('span').length) {
        this.markPathOfMotion(boxID);
        this.selectBoxID = boxID;
      } else if (
        this.selectBoxID != null &&
        (this.selectBoxID + this.boardSizeArray.length == boxID ||
          this.selectBoxID - this.boardSizeArray.length == boxID ||
          (this.selectBoxID + 1 == boxID &&
            this.selectBoxID % this.boardSizeArray.length !=
              this.boardSizeArray.length - 1) ||
          (this.selectBoxID - 1 == boxID &&
            this.selectBoxID % this.boardSizeArray.length != 0))
      ) {
        selectBox.innerHTML = document.getElementById(
          `box${this.selectBoxID}`
        ).innerHTML;
        document.getElementById(`box${this.selectBoxID}`).innerHTML = null;
        this.selectBoxID = null;
      } else {
        this.selectBoxID = null;
      }
    } else if (this.selectBoxID != null) {
      console.log('remove');
    }
  }

  markPathOfMotion(boxID: number) {
    if (
      boxID + 1 >= 0 &&
      boxID + 1 < this.boardSize &&
      boxID % this.boardSizeArray.length != this.boardSizeArray.length - 1
    )
      document
        .getElementById(`box${boxID + 1}`)
        .classList.add('board__box__green');

    if (
      boxID - 1 >= 0 &&
      boxID - 1 < this.boardSize &&
      boxID % this.boardSizeArray.length != 0
    )
      document
        .getElementById(`box${boxID - 1}`)
        .classList.add('board__box__green');

    if (
      boxID - this.boardSizeArray.length >= 0 &&
      boxID - this.boardSizeArray.length < this.boardSize
    )
      document
        .getElementById(`box${boxID - this.boardSizeArray.length}`)
        .classList.add('board__box__green');

    if (
      boxID + this.boardSizeArray.length >= 0 &&
      boxID + this.boardSizeArray.length < this.boardSize
    )
      document
        .getElementById(`box${boxID + this.boardSizeArray.length}`)
        .classList.add('board__box__green');
  }

  randomStoneLaying(numberOfStones: number, maxLimit: number): Array<number> {
    let stonePositions: Array<number> = [];
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * maxLimit);
      if (stonePositions.indexOf(randomNumber) === -1)
        stonePositions.push(randomNumber);
    } while (stonePositions.length != numberOfStones);
    return stonePositions;
  }
}
