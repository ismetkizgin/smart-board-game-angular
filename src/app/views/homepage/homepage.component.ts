import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
})
export class HomepageComponent implements OnInit {
  constructor(private _languageService: LanguageService) {}

  selectionScreenShowHide = false;
  ngOnInit(): void {}
  
  refreshPage() {
    window.location.reload();
   }

  selectionScreenToggle(event) {
    if (event) {
      this.selectionScreenShowHide = !this.selectionScreenShowHide;
    }
  }
}
