import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectsListHeaderComponent } from './dashboard-projects-list-header.component';

describe('DashboardProjectsListHeaderComponent', () => {
  let component: DashboardProjectsListHeaderComponent;
  let fixture: ComponentFixture<DashboardProjectsListHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProjectsListHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectsListHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
