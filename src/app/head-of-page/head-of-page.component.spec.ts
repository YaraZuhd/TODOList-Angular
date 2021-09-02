import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadOfPageComponent } from './head-of-page.component';

describe('HeadOfPageComponent', () => {
  let component: HeadOfPageComponent;
  let fixture: ComponentFixture<HeadOfPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadOfPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadOfPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
