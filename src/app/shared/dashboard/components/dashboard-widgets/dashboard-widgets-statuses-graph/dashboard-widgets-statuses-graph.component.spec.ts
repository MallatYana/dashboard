import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsStatusesGraphComponent } from './dashboard-widgets-statuses-graph.component';

describe('DashboardWidgetsStatusesGraphComponent', () => {
  let component: DashboardWidgetsStatusesGraphComponent;
  let fixture: ComponentFixture<DashboardWidgetsStatusesGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsStatusesGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsStatusesGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
