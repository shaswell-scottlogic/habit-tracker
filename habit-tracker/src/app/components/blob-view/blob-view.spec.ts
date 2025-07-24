import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlobView } from './blob-view';

describe('BlobView', () => {
  let component: BlobView;
  let fixture: ComponentFixture<BlobView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlobView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlobView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
