import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetaskbuttonComponent } from './deletetaskbutton.component';

describe('DeletetaskbuttonComponent', () => {
  let component: DeletetaskbuttonComponent;
  let fixture: ComponentFixture<DeletetaskbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetaskbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletetaskbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
