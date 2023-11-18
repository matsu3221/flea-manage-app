import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSalesManegeComponent } from './total-sales-manege.component';

describe('TotalSalesManegeComponent', () => {
  let component: TotalSalesManegeComponent;
  let fixture: ComponentFixture<TotalSalesManegeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalSalesManegeComponent]
    });
    fixture = TestBed.createComponent(TotalSalesManegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
