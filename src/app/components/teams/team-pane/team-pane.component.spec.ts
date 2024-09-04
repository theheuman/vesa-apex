import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPaneComponent } from './team-pane.component';

describe('TeamPaneComponent', () => {
  let component: TeamPaneComponent;
  let fixture: ComponentFixture<TeamPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeamPaneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeamPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
