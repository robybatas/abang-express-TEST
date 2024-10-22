import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HeaderWithButtonBackComponent } from './header-with-button-back.component';

describe('HeaderWithButtonBackComponent', () => {
  let component: HeaderWithButtonBackComponent;
  let fixture: ComponentFixture<HeaderWithButtonBackComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWithButtonBackComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderWithButtonBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
