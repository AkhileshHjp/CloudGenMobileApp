import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeadsheetComponent } from './add-leadsheet.component';

describe('AddLeadsheetComponent', () => {
  let component: AddLeadsheetComponent;
  let fixture: ComponentFixture<AddLeadsheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLeadsheetComponent]
    });
    fixture = TestBed.createComponent(AddLeadsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
