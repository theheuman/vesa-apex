import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScoreboardsComponent } from './pages/scoreboards/scoreboards.component';
import { FaqComponent } from './pages/faq/faq.component';
import { RostersComponent } from './pages/rosters/rosters.component';
import { TeamComponent } from './pages/team/team.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'scoreboards', component: ScoreboardsComponent },
  { path: 'rosters', component: RostersComponent },
  { path: 'FAQ', component: FaqComponent },
  { path: 'team/:id', component: TeamComponent },
];
