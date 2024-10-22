import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputOtpPage } from './input-otp.page';

describe('InputOtpPage', () => {
  let component: InputOtpPage;
  let fixture: ComponentFixture<InputOtpPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOtpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
