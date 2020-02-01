import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogAddBeerComponent } from './dialog-add-beer.component';

describe('DialogAddBeerComponent', () => {
  let component: DialogAddBeerComponent;
  let fixture: ComponentFixture<DialogAddBeerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogAddBeerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogAddBeerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
