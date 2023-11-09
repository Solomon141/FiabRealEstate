import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutinhomeComponent } from './aboutinhome.component';

describe('AboutinhomeComponent', () => {
  let component: AboutinhomeComponent;
  let fixture: ComponentFixture<AboutinhomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutinhomeComponent]
    });
    fixture = TestBed.createComponent(AboutinhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
