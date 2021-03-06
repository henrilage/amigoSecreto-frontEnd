import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastraPessoaComponent } from './cadastra-pessoa.component';

describe('CadastraPessoaComponent', () => {
  let component: CadastraPessoaComponent;
  let fixture: ComponentFixture<CadastraPessoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastraPessoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastraPessoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
