import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsDatabaseConnectionComponent } from './dashboard-widgets-database-connection.component';

describe('DashboardWidgetsDatabaseConnectionComponent', () => {
  let component: DashboardWidgetsDatabaseConnectionComponent;
  let fixture: ComponentFixture<DashboardWidgetsDatabaseConnectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsDatabaseConnectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsDatabaseConnectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
