import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiplayerScreenComponent } from './multiplayer-screen.component';

describe('MultiplayerScreenComponent', () => {
  let component: MultiplayerScreenComponent;
  let fixture: ComponentFixture<MultiplayerScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiplayerScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiplayerScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
