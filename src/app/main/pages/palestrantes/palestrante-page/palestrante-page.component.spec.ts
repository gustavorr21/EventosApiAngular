import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalestrantePageComponent } from './palestrante-page.component';

describe('PalestrantePageComponent', () => {
  let component: PalestrantePageComponent;
  let fixture: ComponentFixture<PalestrantePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalestrantePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PalestrantePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
