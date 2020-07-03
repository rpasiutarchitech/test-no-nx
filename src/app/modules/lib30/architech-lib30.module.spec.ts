import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib30Module } from './architech-lib30.module';

describe('ArchitechLib30Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib30Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib30Module).toBeDefined();
  });
});
