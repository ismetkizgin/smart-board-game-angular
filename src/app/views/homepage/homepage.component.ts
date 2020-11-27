import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/utils';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor() {}

  selectionScreenShowHide = false;
  ngOnInit(): void {}

  selectionScreenToggle(event) {
    if (event) {
      this.selectionScreenShowHide = !this.selectionScreenShowHide;
    }
  }
}
