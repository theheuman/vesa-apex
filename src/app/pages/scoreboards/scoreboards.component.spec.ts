import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreboardsComponent } from './scoreboards.component';

describe('ScoreboardsComponent', () => {
  let component: ScoreboardsComponent;
  let fixture: ComponentFixture<ScoreboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScoreboardsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScoreboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
