import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsStatusComponent } from './dashboard-widgets-status.component';

describe('DashboardWidgetsStatusComponent', () => {
  let component: DashboardWidgetsStatusComponent;
  let fixture: ComponentFixture<DashboardWidgetsStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
