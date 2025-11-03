import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsTasksGraphComponent } from './dashboard-widgets-tasks-graph.component';

describe('DashboardWidgetsTasksGraphComponent', () => {
  let component: DashboardWidgetsTasksGraphComponent;
  let fixture: ComponentFixture<DashboardWidgetsTasksGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsTasksGraphComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsTasksGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
