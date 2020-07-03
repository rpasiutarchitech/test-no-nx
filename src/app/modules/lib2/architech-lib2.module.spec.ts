import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib2Module } from './architech-lib2.module';

describe('ArchitechLib2Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib2Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib2Module).toBeDefined();
  });
});
