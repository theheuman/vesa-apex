import { Component } from '@angular/core';
import { Team } from '../../services/rosters/classes';
import { RostersService } from '../../services/rosters/rosters.service';
import { NgForOf } from '@angular/common';
import { TeamPaneComponent } from '../../components/teams/team-pane/team-pane.component';

@Component({
  selector: 'app-rosters',
  standalone: true,
  imports: [NgForOf, TeamPaneComponent],
  templateUrl: './rosters.component.html',
  styleUrl: './rosters.component.scss',
})
export class RostersComponent {
  loading = true;
  leagueTeams: Team<3, 3>[];
  vcsTeams: Team<3, 5>[];

  constructor(private rosterService: RostersService) {
    this.leagueTeams = [];
    this.vcsTeams = [];
    this.getTeams().then(() => {
      this.loading = false;
    });
  }

  async getTeams() {
    this.leagueTeams = await this.rosterService.getTeams(3, 3);
    this.vcsTeams = await this.rosterService.getTeams(3, 5);
  }
}
