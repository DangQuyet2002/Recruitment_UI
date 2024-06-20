import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCvComponent } from './template-cv.component';

describe('TemplateCvComponent', () => {
  let component: TemplateCvComponent;
  let fixture: ComponentFixture<TemplateCvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateCvComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
