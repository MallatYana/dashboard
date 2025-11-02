import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpersNoDataComponent } from './helpers-no-data.component';

describe('HelpersNoDataComponent', () => {
  let component: HelpersNoDataComponent;
  let fixture: ComponentFixture<HelpersNoDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpersNoDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpersNoDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
