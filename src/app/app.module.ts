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
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';
import {PlayerDetailsComponent} from './pages/player-details/player-details.component';
import {ErrorPageComponent} from './pages/error-page/error-page.component';
import {PlayerFormComponent} from './pages/player-form/player-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {PlayerTableComponent} from './pages/player-table/player-table.component';
import {AdminComponent} from './pages/admin/admin.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {AngularSvgIconModule} from 'angular-svg-icon';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerDetailsComponent,
    ErrorPageComponent,
    PlayerFormComponent,
    PlayerTableComponent,
    AdminComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularSvgIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatTooltipModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
