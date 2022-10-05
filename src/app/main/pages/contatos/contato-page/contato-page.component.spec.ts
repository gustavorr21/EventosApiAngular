import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoPageComponent } from './contato-page.component';

describe('ContatoPageComponent', () => {
  let component: ContatoPageComponent;
  let fixture: ComponentFixture<ContatoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
