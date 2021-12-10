import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransferencia.Component.HtmlComponent } from './nova-transferencia.component.html.component';

describe('NovaTransferencia.Component.HtmlComponent', () => {
  let component: NovaTransferencia.Component.HtmlComponent;
  let fixture: ComponentFixture<NovaTransferencia.Component.HtmlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaTransferencia.Component.HtmlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTransferencia.Component.HtmlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
