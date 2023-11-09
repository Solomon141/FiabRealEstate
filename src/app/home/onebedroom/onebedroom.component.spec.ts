import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnebedroomComponent } from './onebedroom.component';

describe('OnebedroomComponent', () => {
  let component: OnebedroomComponent;
  let fixture: ComponentFixture<OnebedroomComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OnebedroomComponent]
    });
    fixture = TestBed.createComponent(OnebedroomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
