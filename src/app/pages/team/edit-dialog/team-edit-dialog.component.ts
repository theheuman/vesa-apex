import { Component, Inject } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { Team, TeamWrapper, Player } from '../../../services/rosters/classes';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButton } from '@angular/material/button';
import {
  getLeagueType,
  LeagueType,
} from '../../../services/rosters/dbInterfaces';
import { PlayerAdderComponent } from '../player-adder/player-adder.component';

@Component({
  selector: 'app-team-edit-dialog',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    FormsModule,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    PlayerAdderComponent,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './team-edit-dialog.component.html',
  styleUrl: './team-edit-dialog.component.scss',
})
export class TeamEditDialogComponent {
  name: string;
  players: Player[];
  formerPlayers: Player[];
  leagueType: LeagueType;
  formerNames: string[];
  allPlayers: Player[];

  constructor(
    public dialogRef: MatDialogRef<TeamEditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { team: TeamWrapper },
  ) {
    this.name = this.data.team.name;
    this.players = this.data.team.roster.players;
    this.formerPlayers = this.data.team.formerPlayers;
    this.leagueType = getLeagueType(
      this.data.team.roster.minLength,
      this.data.team.roster.maxLength,
    );
    this.formerNames = this.data.team.formerNames;
    this.allPlayers = [...this.players, ...this.formerPlayers];
  }

  onCancelClick(): void {
    this.dialogRef.close({ team: this.data.team });
  }

  submitChanges(): void {
    const fakePlayer = {
      id: '1',
      name: 'fake player',
      overstat: 'fake over',
      discord: 'fake',
    };
    const team = new Team<3, 3>('Different name', [], [], 3, 3, [
      fakePlayer,
      fakePlayer,
      fakePlayer,
    ]);
    this.dialogRef.close({ team });
  }
}
