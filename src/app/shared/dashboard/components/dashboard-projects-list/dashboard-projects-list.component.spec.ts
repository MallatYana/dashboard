import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectsListComponent } from './dashboard-projects-list.component';

describe('DashboardProjectsListComponent', () => {
  let component: DashboardProjectsListComponent;
  let fixture: ComponentFixture<DashboardProjectsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProjectsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
