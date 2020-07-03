import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib27Module } from './architech-lib27.module';

describe('ArchitechLib27Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib27Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib27Module).toBeDefined();
  });
});
