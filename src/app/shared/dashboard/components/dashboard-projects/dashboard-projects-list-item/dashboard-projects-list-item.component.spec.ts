import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardProjectsListItemComponent } from './dashboard-projects-list-item.component';

describe('DashboardProjectsListItemComponent', () => {
  let component: DashboardProjectsListItemComponent;
  let fixture: ComponentFixture<DashboardProjectsListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardProjectsListItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardProjectsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
