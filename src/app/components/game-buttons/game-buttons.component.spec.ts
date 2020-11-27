import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameButtonsComponent } from './game-buttons.component';

describe('GameButtonsComponent', () => {
  let component: GameButtonsComponent;
  let fixture: ComponentFixture<GameButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
