import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerAdderComponent } from './player-adder.component';

describe('PlayerAdderComponent', () => {
  let component: PlayerAdderComponent;
  let fixture: ComponentFixture<PlayerAdderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayerAdderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlayerAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
