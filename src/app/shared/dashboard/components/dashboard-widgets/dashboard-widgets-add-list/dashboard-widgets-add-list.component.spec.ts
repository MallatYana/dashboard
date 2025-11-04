import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardWidgetsAddListComponent } from './dashboard-widgets-add-list.component';

describe('DashboardWidgetsAddListComponent', () => {
  let component: DashboardWidgetsAddListComponent;
  let fixture: ComponentFixture<DashboardWidgetsAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardWidgetsAddListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardWidgetsAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
