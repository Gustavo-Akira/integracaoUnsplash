import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FotosMostrarComponent } from './fotos-mostrar.component';

describe('FotosMostrarComponent', () => {
  let component: FotosMostrarComponent;
  let fixture: ComponentFixture<FotosMostrarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FotosMostrarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FotosMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
