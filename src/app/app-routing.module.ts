import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersListComponent} from './pages/players-list/players-list.component';
import {PlayerDetailsComponent} from './pages/player-details/player-details.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {PlayerTableComponent} from './pages/player-table/player-table.component';


const routes: Routes = [
  {path: 'players-list', component: PlayersListComponent},
  {path: 'players/:id', component: PlayerDetailsComponent},
  {path: 'players-ranking', component: PlayerTableComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
