import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RostersService } from '../../services/rosters/rosters.service';
import { TeamWrapper } from '../../services/rosters/classes';
import { NgForOf, NgIf } from '@angular/common';
import { PlayerPaneComponent } from '../../components/players/player-pane/player-pane.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [NgIf, PlayerPaneComponent, NgForOf],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent implements OnInit {
  id!: string;
  team!: TeamWrapper;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private rosterService: RostersService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id')!;
      this.rosterService.getTeamByID(this.id).then((team) => {
        console.log('Found team', team);
        this.team = team;
        this.loading = true;
      });
    });
  }
}
