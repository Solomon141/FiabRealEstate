import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarousalsliderComponent } from './carousalslider.component';

describe('CarousalsliderComponent', () => {
  let component: CarousalsliderComponent;
  let fixture: ComponentFixture<CarousalsliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarousalsliderComponent]
    });
    fixture = TestBed.createComponent(CarousalsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
