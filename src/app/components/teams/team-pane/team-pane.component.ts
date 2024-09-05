import { Component, Input, OnChanges } from '@angular/core';
import { Player, TeamWrapper } from '../../../services/rosters/classes';
import { NgForOf, NgIf } from '@angular/common';
import { PlayerPaneComponent } from '../../players/player-pane/player-pane.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-team-pane',
  standalone: true,
  imports: [NgIf, NgForOf, PlayerPaneComponent],
  templateUrl: './team-pane.component.html',
  styleUrl: './team-pane.component.scss',
})
export class TeamPaneComponent implements OnChanges {
  @Input() team?: TeamWrapper;
  currentPlayers: Player[] = [];
  formerPlayers: Player[] = [];

  constructor(private router: Router) {}
  ngOnChanges() {
    if (this.team) {
      this.currentPlayers = this.team.roster.getPlayers();
      this.formerPlayers = this.team.formerPlayers;
    }
  }

  openDetails() {
    this.router.navigateByUrl('/team/' + this.team?.id);
  }
}
