import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersStatusComponent } from './helpers-status.component';

describe('HelpersStatusComponent', () => {
  let component: HelpersStatusComponent;
  let fixture: ComponentFixture<HelpersStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpersStatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpersStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
