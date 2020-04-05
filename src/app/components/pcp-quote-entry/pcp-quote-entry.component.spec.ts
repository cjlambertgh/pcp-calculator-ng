import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcpQuoteEntryComponent } from './pcp-quote-entry.component';

describe('PcpQuoteEntryComponent', () => {
  let component: PcpQuoteEntryComponent;
  let fixture: ComponentFixture<PcpQuoteEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcpQuoteEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcpQuoteEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
