import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsContainerComponent } from './dashboard-widgets-container.component';

describe('DashboardWidgetsContainerComponent', () => {
  let component: DashboardWidgetsContainerComponent;
  let fixture: ComponentFixture<DashboardWidgetsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
