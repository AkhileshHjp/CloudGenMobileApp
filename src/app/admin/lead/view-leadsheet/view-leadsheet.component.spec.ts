import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLeadsheetComponent } from './view-leadsheet.component';

describe('ViewLeadsheetComponent', () => {
  let component: ViewLeadsheetComponent;
  let fixture: ComponentFixture<ViewLeadsheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewLeadsheetComponent]
    });
    fixture = TestBed.createComponent(ViewLeadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
