import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElencoLibri } from './elenco-libri';

describe('ElencoLibri', () => {
  let component: ElencoLibri;
  let fixture: ComponentFixture<ElencoLibri>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElencoLibri]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElencoLibri);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
