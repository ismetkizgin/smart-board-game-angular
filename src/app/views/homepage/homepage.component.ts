import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/utils';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private _languageService:LanguageService) { }

  ngOnInit(): void {
  }
  useLanguage(language: string) {
    this._languageService.setLanguage(language);
  }

}
