import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEmployerComponent } from './header-employer.component';

describe('HeaderEmployerComponent', () => {
  let component: HeaderEmployerComponent;
  let fixture: ComponentFixture<HeaderEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
