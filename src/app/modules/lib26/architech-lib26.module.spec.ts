import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib26Module } from './architech-lib26.module';

describe('ArchitechLib26Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib26Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib26Module).toBeDefined();
  });
});
