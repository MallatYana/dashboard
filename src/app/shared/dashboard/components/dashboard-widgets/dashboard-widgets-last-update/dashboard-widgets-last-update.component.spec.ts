import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsLastUpdateComponent } from './dashboard-widgets-last-update.component';

describe('DashboardWidgetsLastUpdateComponent', () => {
  let component: DashboardWidgetsLastUpdateComponent;
  let fixture: ComponentFixture<DashboardWidgetsLastUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsLastUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsLastUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
