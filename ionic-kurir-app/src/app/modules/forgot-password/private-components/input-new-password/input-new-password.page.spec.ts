import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputNewPasswordPage } from './input-new-password.page';

describe('InputNewPasswordPage', () => {
  let component: InputNewPasswordPage;
  let fixture: ComponentFixture<InputNewPasswordPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(InputNewPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
