import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReativeFormPageComponent } from './reative-form-page.component';

describe('ReativeFormPageComponent', () => {
  let component: ReativeFormPageComponent;
  let fixture: ComponentFixture<ReativeFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReativeFormPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReativeFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
