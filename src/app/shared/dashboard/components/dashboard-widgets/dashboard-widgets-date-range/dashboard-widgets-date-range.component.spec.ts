import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsDateRangeComponent } from './dashboard-widgets-date-range.component';

describe('DashboardWidgetsDateRangeComponent', () => {
  let component: DashboardWidgetsDateRangeComponent;
  let fixture: ComponentFixture<DashboardWidgetsDateRangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsDateRangeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsDateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
