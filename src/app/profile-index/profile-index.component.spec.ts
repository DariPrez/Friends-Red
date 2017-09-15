import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileIndexComponent } from './profile-index.component';

describe('ProfileIndexComponent', () => {
  let component: ProfileIndexComponent;
  let fixture: ComponentFixture<ProfileIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
