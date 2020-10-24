import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './utils';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  constructor(
    private _translateService: TranslateService,
    private _titleService: Title,
    private _router: Router,
    private _languageService: LanguageService,
    private _activatedRoute: ActivatedRoute
  ) {
    this._translateService.addLangs(['tr', 'en']);
    this._translateService.setDefaultLang('tr');

    if (this._languageService.getLanguage()) {
      this._translateService.use(localStorage.getItem('language'));
    } else {
      this._translateService.use(this._translateService.getBrowserLang());
    }
  }

  ngOnInit(): void {
    this._router.events
      .pipe(
        map(() => {
          let child = this._activatedRoute.firstChild;
          while (child) {
            if (child.firstChild) {
              child = child.firstChild;
            } else if (child.snapshot.data && child.snapshot.data['title']) {
              return child.snapshot.data['title'];
            } else {
              return null;
            }
          }
        })
      )
      .subscribe((title) => {
        this._translateService.get('ProjectName').subscribe((projectName) => {
          title != null
            ? this._translateService.get(title).subscribe((value) => {
                this._titleService.setTitle(`${value} - ${projectName}`);
              })
            : this._titleService.setTitle(`${projectName}`);
        });
      });
  }
}
