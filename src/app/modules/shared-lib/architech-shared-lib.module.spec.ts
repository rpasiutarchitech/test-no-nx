import { async, TestBed } from '@angular/core/testing';
import { ArchitechSharedLibModule } from './architech-shared-lib.module';

describe('ArchitechSharedLibModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ArchitechSharedLibModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ArchitechSharedLibModule).toBeDefined();
  });
});
