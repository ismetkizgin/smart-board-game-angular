import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LanguageService } from 'src/app/utils';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
})
export class SplashScreenComponent implements OnInit {
  @Output() selectionScreenToggle = new EventEmitter();

  constructor(private _languageService: LanguageService) {}
  
  ngOnInit(): void {}

  useLanguage(language: string) {
    this._languageService.setLanguage(language);
  }

  singlePlayerSubmit(){
    this.selectionScreenToggle.emit(true);
  }
}
