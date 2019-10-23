import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlayersListComponent} from './pages/players-list/players-list.component';


const routes: Routes = [
  {path: '', component: PlayersListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
