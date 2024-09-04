import { Component, Input } from '@angular/core';
import { NgForOf } from '@angular/common';
import { Player } from '../../../services/rosters/classes';

@Component({
  selector: 'app-player-pane',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './player-pane.component.html',
  styleUrl: './player-pane.component.scss',
})
export class PlayerPaneComponent {
  @Input() player?: Player;
}
