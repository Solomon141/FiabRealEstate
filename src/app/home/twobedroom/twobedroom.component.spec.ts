import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwobedroomComponent } from './twobedroom.component';

describe('TwobedroomComponent', () => {
  let component: TwobedroomComponent;
  let fixture: ComponentFixture<TwobedroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TwobedroomComponent]
    });
    fixture = TestBed.createComponent(TwobedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
