import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessChangePage } from './success-change.page';

describe('SuccessChangePage', () => {
  let component: SuccessChangePage;
  let fixture: ComponentFixture<SuccessChangePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessChangePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
