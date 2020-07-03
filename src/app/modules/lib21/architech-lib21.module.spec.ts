import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib21Module } from './architech-lib21.module';

describe('ArchitechLib21Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib21Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib21Module).toBeDefined();
  });
});
