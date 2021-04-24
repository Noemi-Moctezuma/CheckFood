import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CategoriaSeleccionadaPage } from './categoria-seleccionada.page';

describe('CategoriaSeleccionadaPage', () => {
  let component: CategoriaSeleccionadaPage;
  let fixture: ComponentFixture<CategoriaSeleccionadaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CategoriaSeleccionadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CategoriaSeleccionadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
