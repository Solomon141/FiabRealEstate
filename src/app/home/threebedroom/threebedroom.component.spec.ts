import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreebedroomComponent } from './threebedroom.component';

describe('ThreebedroomComponent', () => {
  let component: ThreebedroomComponent;
  let fixture: ComponentFixture<ThreebedroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThreebedroomComponent]
    });
    fixture = TestBed.createComponent(ThreebedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
