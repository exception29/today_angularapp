import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailypageEditComponent } from './dailypage-edit.component';

describe('DailypageEditComponent', () => {
  let component: DailypageEditComponent;
  let fixture: ComponentFixture<DailypageEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailypageEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailypageEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
