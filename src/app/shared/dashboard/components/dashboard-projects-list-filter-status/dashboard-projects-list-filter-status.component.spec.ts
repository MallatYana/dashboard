import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectsListFilterStatusComponent } from './dashboard-projects-list-filter-status.component';

describe('DashboardProjectsListFilterStatusComponent', () => {
  let component: DashboardProjectsListFilterStatusComponent;
  let fixture: ComponentFixture<DashboardProjectsListFilterStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProjectsListFilterStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectsListFilterStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
