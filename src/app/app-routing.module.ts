import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlayerDetailsComponent} from './pages/player-details/player-details.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {PlayerTableComponent} from './pages/player-table/player-table.component';
import {AdminComponent} from './pages/admin/admin.component';


const routes: Routes = [
  {path: '', component: PlayerTableComponent},
  {path: 'players/:id', component: PlayerDetailsComponent},
  {path: 'players-ranking', component: PlayerTableComponent},
  {path: 'admin', component: AdminComponent},
  {path: '**', component: ErrorPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
