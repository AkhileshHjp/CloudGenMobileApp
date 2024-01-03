import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLedeSheetComponent } from './add-lede-sheet.component';

describe('AddLedeSheetComponent', () => {
  let component: AddLedeSheetComponent;
  let fixture: ComponentFixture<AddLedeSheetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddLedeSheetComponent]
    });
    fixture = TestBed.createComponent(AddLedeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
