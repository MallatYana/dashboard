import { TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'dashboard' title`, () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dashboard');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello, dashboard');
  });
});
