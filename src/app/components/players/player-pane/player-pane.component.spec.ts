import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerPaneComponent } from './player-pane.component';

describe('PlayerPaneComponent', () => {
  let component: PlayerPaneComponent;
  let fixture: ComponentFixture<PlayerPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerPaneComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
