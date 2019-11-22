import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {PlayersListComponent} from './pages/players-list/players-list.component';
import {
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatListModule, MatSortModule,
  MatTableModule,
  MatToolbarModule, MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PlayerDetailsComponent} from './pages/player-details/player-details.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import { PlayerFormComponent } from './pages/player-form/player-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PlayerTableComponent } from './pages/player-table/player-table.component';
import { AdminComponent } from './pages/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerDetailsComponent,
    ErrorPageComponent,
    PlayerFormComponent,
    PlayerTableComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
