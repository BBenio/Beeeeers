import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddPriceComponent } from './dialog-add-price.component';

describe('DialogAddPriceComponent', () => {
  let component: DialogAddPriceComponent;
  let fixture: ComponentFixture<DialogAddPriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddPriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
