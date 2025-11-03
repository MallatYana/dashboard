import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsTotalTasksComponent } from './dashboard-widgets-total-tasks.component';

describe('DashboardWidgetsTotalTasksComponent', () => {
  let component: DashboardWidgetsTotalTasksComponent;
  let fixture: ComponentFixture<DashboardWidgetsTotalTasksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsTotalTasksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsTotalTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
