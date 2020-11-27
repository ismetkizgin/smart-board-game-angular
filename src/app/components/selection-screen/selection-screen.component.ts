import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GameModeControlService } from '../../utils';
import { Router } from '@angular/router';
import { Game } from '../../models';

@Component({
  selector: 'app-selection-screen',
  templateUrl: './selection-screen.component.html',
  styleUrls: ['./selection-screen.component.scss'],
})
export class SelectionScreenComponent implements OnInit {
  constructor(
    private _gameModeControlService: GameModeControlService,
    private _snackBar: MatSnackBar,
    private _translateService: TranslateService,
    private _router: Router
  ) {}

  _model: Game = new Game();
  creativeFormShowHide: boolean = false;
  numberOfState: number;
  stoneNumbers: Array<number> = [];
  ngOnInit(): void {}

  creativeFormToggle() {
    this.creativeFormShowHide = !this.creativeFormShowHide;
    if (this.creativeFormShowHide)
      document.getElementById('container').style.cssText =
        'margin-top:80px !important';
    else document.getElementById('container').removeAttribute('style');
  }

  onSelectBoardSize(boardSize: number) {
    this.stoneNumbers = Array(
      this._gameModeControlService.maxNumberOfStone(boardSize) - 2
    )
      .fill(null)
      .map((x, i) => i + 2);
  }

  onSubmit(creativeForm: NgForm) {
    if (creativeForm.valid) {
      this._router.navigateByUrl(
        `/game/${creativeForm.value.BoardSize}/${creativeForm.value.StoneCount}`
      );
    } else {
      let message;
      this._translateService
        .get('Please fill in the required fields')
        .subscribe((value) => (message = value));
      this._snackBar.open(message, 'X', {
        duration: 3000,
        horizontalPosition: 'right',
        verticalPosition: 'bottom',
        panelClass: 'notification__error',
      });
    }
  }
}
