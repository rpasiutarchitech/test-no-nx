import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib12Module } from './architech-lib12.module';

describe('ArchitechLib12Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib12Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib12Module).toBeDefined();
  });
});
