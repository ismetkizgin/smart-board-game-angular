import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-endgame-window',
  templateUrl: './endgame-window.component.html',
  styleUrls: ['./endgame-window.component.scss']
})
export class EndgameWindowComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  control:boolean=false;
  ngOnInit(): void {
    this.control=this.data?.winningStatus
  }

}
