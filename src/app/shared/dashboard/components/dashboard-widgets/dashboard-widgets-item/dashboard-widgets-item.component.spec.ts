import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsItemComponent } from './dashboard-widgets-item.component';

describe('DashboardWidgetsItemComponent', () => {
  let component: DashboardWidgetsItemComponent;
  let fixture: ComponentFixture<DashboardWidgetsItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
