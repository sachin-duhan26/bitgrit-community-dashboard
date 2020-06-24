import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidReportCardsComponent } from './covid-report-cards.component';

describe('CovidReportCardsComponent', () => {
  let component: CovidReportCardsComponent;
  let fixture: ComponentFixture<CovidReportCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidReportCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidReportCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
