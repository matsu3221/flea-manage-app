import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingManageComponent } from './listing-manage.component';

describe('ListingManageComponent', () => {
  let component: ListingManageComponent;
  let fixture: ComponentFixture<ListingManageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListingManageComponent]
    });
    fixture = TestBed.createComponent(ListingManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
