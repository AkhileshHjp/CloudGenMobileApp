import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsheetListComponent } from './leadsheet-list.component';

describe('LeadsheetListComponent', () => {
  let component: LeadsheetListComponent;
  let fixture: ComponentFixture<LeadsheetListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeadsheetListComponent]
    });
    fixture = TestBed.createComponent(LeadsheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
