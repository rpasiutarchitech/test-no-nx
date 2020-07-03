import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib7Module } from './architech-lib7.module';

describe('ArchitechLib7Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib7Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib7Module).toBeDefined();
  });
});
