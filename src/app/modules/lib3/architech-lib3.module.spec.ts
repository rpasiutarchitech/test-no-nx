import { async, TestBed } from '@angular/core/testing';
import { ArchitechLib3Module } from './architech-lib3.module';

describe('ArchitechLib3Module', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechLib3Module]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechLib3Module).toBeDefined();
  });
});
