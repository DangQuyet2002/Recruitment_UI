import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountEmployerComponent } from './account-employer.component';

describe('AccountEmployerComponent', () => {
  let component: AccountEmployerComponent;
  let fixture: ComponentFixture<AccountEmployerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountEmployerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountEmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
