import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib29Module } from './architech-lib29.module';

describe('ArchitechLib29Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib29Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib29Module).toBeDefined();
  });
});
