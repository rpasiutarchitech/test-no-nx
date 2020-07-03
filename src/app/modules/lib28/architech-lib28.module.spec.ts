import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib28Module } from './architech-lib28.module';

describe('ArchitechLib28Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib28Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib28Module).toBeDefined();
  });
});
