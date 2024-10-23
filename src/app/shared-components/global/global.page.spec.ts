import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GlobalPage } from './global.page';

describe('GlobalPage', () => {
  let component: GlobalPage;
  let fixture: ComponentFixture<GlobalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
