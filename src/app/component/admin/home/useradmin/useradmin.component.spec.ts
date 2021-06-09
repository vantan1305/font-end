import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseradminComponent } from './useradmin.component';

describe('UseradminComponent', () => {
  let component: UseradminComponent;
  let fixture: ComponentFixture<UseradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UseradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
