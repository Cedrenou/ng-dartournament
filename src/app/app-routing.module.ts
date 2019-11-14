import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersListComponent} from './pages/players-list/players-list.component';
import {PlayerDetailsComponent} from './pages/player-details/player-details.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';


const routes: Routes = [
  {path: '', component: PlayersListComponent},
  {path: 'players/:id', component: PlayerDetailsComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
