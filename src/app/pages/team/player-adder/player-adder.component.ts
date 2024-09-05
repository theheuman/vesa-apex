import { Component, Input, OnChanges } from '@angular/core';
import { RostersService } from '../../../services/rosters/rosters.service';
import { Player } from '../../../services/rosters/classes';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-player-adder',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './player-adder.component.html',
  styleUrl: './player-adder.component.scss',
})
export class PlayerAdderComponent implements OnChanges {
  @Input() currentPlayers: Player[] = [];
  availablePlayers: Player[] = [];
  loading = true;

  constructor(private rosterService: RostersService) {}

  ngOnChanges() {
    this.rosterService.getPlayers().then((players) => {
      const playerIds = this.currentPlayers.map((player) => player.id);
      this.availablePlayers = players.filter(
        (player) => !playerIds.includes(player.id),
      );
      this.loading = false;
    });
  }
}
