import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyEmployerComponent } from './apply-employer.component';

describe('ApplyEmployerComponent', () => {
  let component: ApplyEmployerComponent;
  let fixture: ComponentFixture<ApplyEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplyEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplyEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
