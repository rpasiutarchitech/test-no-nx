import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib15Module } from './architech-lib15.module';

describe('ArchitechLib15Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib15Module],
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib15Module).toBeDefined();
  });
});
