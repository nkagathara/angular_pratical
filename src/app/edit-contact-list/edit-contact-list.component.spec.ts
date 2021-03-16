import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContactListComponent } from './edit-contact-list.component';

describe('EditContactListComponent', () => {
  let component: EditContactListComponent;
  let fixture: ComponentFixture<EditContactListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContactListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
