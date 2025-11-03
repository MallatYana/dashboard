import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersSingleWidgetComponent } from './helpers-single-widget.component';

describe('HelpersSingleWidgetComponent', () => {
  let component: HelpersSingleWidgetComponent;
  let fixture: ComponentFixture<HelpersSingleWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpersSingleWidgetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpersSingleWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
