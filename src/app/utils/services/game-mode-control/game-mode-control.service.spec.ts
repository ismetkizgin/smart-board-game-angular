import { TestBed } from '@angular/core/testing';

import { GameModeControlService } from './game-mode-control.service';

describe('GameModeControlService', () => {
  let service: GameModeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameModeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
