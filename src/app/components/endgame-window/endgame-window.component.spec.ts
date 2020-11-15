import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndgameWindowComponent } from './endgame-window.component';

describe('EndgameWindowComponent', () => {
  let component: EndgameWindowComponent;
  let fixture: ComponentFixture<EndgameWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndgameWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndgameWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
