import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContactListComponent } from './add-contact-list.component';

describe('AddContactListComponent', () => {
  let component: AddContactListComponent;
  let fixture: ComponentFixture<AddContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
