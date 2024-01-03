import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowUpLeadComponent } from './follow-up-lead.component';

describe('FollowUpLeadComponent', () => {
  let component: FollowUpLeadComponent;
  let fixture: ComponentFixture<FollowUpLeadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FollowUpLeadComponent]
    });
    fixture = TestBed.createComponent(FollowUpLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
