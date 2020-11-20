import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EndgameWindowComponent } from '../../components';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _dialog: MatDialog
  ) {}

  boardSizeArray: Array<number>;
  stonePositions: Array<number>;
  boardSize: number;
  onSubmit: Function = this.mainStoneSelection;
  mainStone: number;
  selectBoxID: number;
  numberOfStones: number;
  boardSizeSquare: number;
  wallPositions: Array<number> = [];

  ngOnInit(): void {
    this.boardSize = parseInt(
      this._activatedRoute.snapshot.paramMap.get('BoardSize')
    );
    this.numberOfStones = parseInt(
      this._activatedRoute.snapshot.paramMap.get('NumberOfStones')
    );
    this.boardSizeArray = Array(this.boardSize)
      .fill(null)
      .map((x, i) => i);

    this.boardSizeSquare = Math.pow(this.boardSize, 2);

    this.wallPositions = this.randomLaying(
      Math.floor(this.boardSizeSquare / 10),
      this.boardSizeSquare
    );

    this.stonePositions = this.randomLaying(
      this.numberOfStones,
      this.boardSizeSquare
    );
  }

  motionAreaControl(boxID: number): boolean {
    return (
      this.selectBoxID != null &&
      (this.selectBoxID + this.boardSizeArray.length == boxID ||
        this.selectBoxID - this.boardSizeArray.length == boxID ||
        (this.selectBoxID + 1 == boxID &&
          this.selectBoxID % this.boardSizeArray.length !=
            this.boardSizeArray.length - 1) ||
        (this.selectBoxID - 1 == boxID &&
          this.selectBoxID % this.boardSizeArray.length != 0))
    );
  }

  mainStoneSelection(boxID: number) {
    if (
      document.getElementById(`box${boxID}`).getElementsByTagName('span').length
    ) {
      this.mainStone = boxID;
      this.numberOfStones -= 1;
      const mainBox = (<any>document.getElementById(`box${boxID}`)).firstChild;
      mainBox.classList.remove('board__stone__red');
      mainBox.classList.add('board__stone__green');
      mainBox.innerHTML = '';
      this.onSubmit = this.stoneMovement;
      this.stonePositions.forEach((x) => {
        if (x != boxID) this.numberOfMovesCalculation(x);
      });
    }
  }

  stoneMovement(boxID: number) {
    for (let i = 0; i < this.boardSizeSquare; i++) {
      document.getElementById(`box${i}`).classList.remove('board__box__green');
    }
    if (this.mainStone != boxID) {
      const selectBox: any = document.getElementById(`box${boxID}`);
      if (selectBox.getElementsByTagName('span').length) {
        this.markPathOfMotion(boxID);
        this.selectBoxID = boxID;
      } else if (
        this.motionAreaControl(boxID) &&
        !selectBox.getElementsByTagName('i').length
      ) {
        selectBox.innerHTML = document.getElementById(
          `box${this.selectBoxID}`
        ).innerHTML;
        document.getElementById(`box${this.selectBoxID}`).innerHTML = null;
        this.numberOfMovesCalculation(boxID);
        this.selectBoxID = null;
      } else {
        this.selectBoxID = null;
      }
    } else if (this.motionAreaControl(boxID)) {
      document.getElementById(`box${this.selectBoxID}`).innerHTML = null;
      this.numberOfStones -= 1;

      if (this.numberOfStones == 0) {
        this.endGameWindowOpen();
      }
    }
  }

  markPathOfMotion(boxID: number) {
    if (
      boxID + 1 >= 0 &&
      boxID + 1 < this.boardSizeSquare &&
      boxID % this.boardSizeArray.length != this.boardSizeArray.length - 1
    )
      if (
        !document.getElementById(`box${boxID + 1}`).getElementsByTagName('i')
          .length
      )
        document
          .getElementById(`box${boxID + 1}`)
          .classList.add('board__box__green');

    if (
      boxID - 1 >= 0 &&
      boxID - 1 < this.boardSizeSquare &&
      boxID % this.boardSizeArray.length != 0
    )
      if (
        !document.getElementById(`box${boxID - 1}`).getElementsByTagName('i')
          .length
      )
        document
          .getElementById(`box${boxID - 1}`)
          .classList.add('board__box__green');

    if (
      boxID - this.boardSizeArray.length >= 0 &&
      boxID - this.boardSizeArray.length < this.boardSizeSquare
    )
      if (
        !document
          .getElementById(`box${boxID - this.boardSizeArray.length}`)
          .getElementsByTagName('i').length
      )
        document
          .getElementById(`box${boxID - this.boardSizeArray.length}`)
          .classList.add('board__box__green');

    if (
      boxID + this.boardSizeArray.length >= 0 &&
      boxID + this.boardSizeArray.length < this.boardSizeSquare
    )
      if (
        !document
          .getElementById(`box${boxID + this.boardSizeArray.length}`)
          .getElementsByTagName('i').length
      )
        document
          .getElementById(`box${boxID + this.boardSizeArray.length}`)
          .classList.add('board__box__green');
  }

  randomLaying(numberOfStones: number, maxLimit: number): Array<number> {
    let positions: Array<number> = [];
    let randomNumber: number;
    do {
      randomNumber = Math.floor(Math.random() * maxLimit);
      if (
        positions.indexOf(randomNumber) === -1 &&
        this.wallPositions.indexOf(randomNumber) === -1
      )
        positions.push(randomNumber);
    } while (positions.length != numberOfStones);
    return positions;
  }

  numberOfMovesCalculation(boxID: number) {
    (<any>document.getElementById(`box${boxID}`)).firstChild.innerHTML =
      Math.abs((this.mainStone % this.boardSize) - (boxID % this.boardSize)) +
      Math.abs(
        Math.floor(this.mainStone / this.boardSize) -
          Math.floor(boxID / this.boardSize)
      );
  }

  endGameWindowOpen() {
    const diologRef = this._dialog.open(EndgameWindowComponent, {});

    diologRef.afterClosed().subscribe(async (result: boolean) => {
      if (result) {
        window.location.reload();
      }
    });
  }
}
