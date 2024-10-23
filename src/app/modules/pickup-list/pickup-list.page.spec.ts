import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PickupListPage } from './pickup-list.page';

describe('PickupListPage', () => {
  let component: PickupListPage;
  let fixture: ComponentFixture<PickupListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
