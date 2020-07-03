import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib9Module } from './architech-lib9.module';

describe('ArchitechLib9Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib9Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib9Module).toBeDefined();
  });
});
