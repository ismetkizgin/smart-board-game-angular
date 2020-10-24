import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './utils';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(
    private _translateService: TranslateService,
    private _languageService: LanguageService
  ) {
    this._translateService.addLangs(['tr', 'en']);
    this._translateService.setDefaultLang('tr');

    if (this._languageService.getLanguage()) {
      this._translateService.use(localStorage.getItem('language'));
    } else {
      this._translateService.use(this._translateService.getBrowserLang());
    }
  }
}