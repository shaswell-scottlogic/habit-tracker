import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nope } from './nope';

describe('Nope', () => {
  let component: Nope;
  let fixture: ComponentFixture<Nope>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nope]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nope);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
