import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib23Module } from './architech-lib23.module';

describe('ArchitechLib23Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib23Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib23Module).toBeDefined();
  });
});
