import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecuperarContraseniaComponent } from './recuperar-contrasenia.component';

describe('RecuperarContraseniaComponent', () => {
  let component: RecuperarContraseniaComponent;
  let fixture: ComponentFixture<RecuperarContraseniaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RecuperarContraseniaComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecuperarContraseniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
