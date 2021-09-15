import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnApiResponseComponent } from './on-api-response.component';

describe('OnApiResponseComponent', () => {
  let component: OnApiResponseComponent;
  let fixture: ComponentFixture<OnApiResponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnApiResponseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnApiResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
