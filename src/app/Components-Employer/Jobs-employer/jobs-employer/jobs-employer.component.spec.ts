import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsEmployerComponent } from './jobs-employer.component';

describe('JobsEmployerComponent', () => {
  let component: JobsEmployerComponent;
  let fixture: ComponentFixture<JobsEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobsEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobsEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
