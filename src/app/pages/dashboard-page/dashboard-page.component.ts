import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardContainerComponent } from '../../shared/dashboard/components/dashboard-container/dashboard-container.component';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [ RouterOutlet, DashboardContainerComponent ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {
  ngOnInit() {
  }
}
