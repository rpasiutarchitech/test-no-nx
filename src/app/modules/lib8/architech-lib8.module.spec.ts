import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib8Module } from './architech-lib8.module';

describe('ArchitechLib8Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib8Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib8Module).toBeDefined();
  });
});
