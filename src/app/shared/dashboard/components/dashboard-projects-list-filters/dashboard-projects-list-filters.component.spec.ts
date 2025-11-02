import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectsListFiltersComponent } from './dashboard-projects-list-filters.component';

describe('DashboardProjectsListFiltersComponent', () => {
  let component: DashboardProjectsListFiltersComponent;
  let fixture: ComponentFixture<DashboardProjectsListFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProjectsListFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectsListFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
