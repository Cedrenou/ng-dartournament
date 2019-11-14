import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {settings} from '../settings';
import {Observable} from 'rxjs';
import {Player} from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  constructor(private http: HttpClient) {
  }

  getAllPlayers(): Observable<Player[]> {
    return this.http.get<Player[]>(`${settings.apiUrl}/players`);
  }

  getPlayerById(id) {
    return this.http.get(`${settings.apiUrl}/player/${id}`);
  }

  deletePlayer(id) {
    return this.http.delete(`${settings.apiUrl}/player/${id}`);
  }

  createPlayer(player) {
    return this.http.post(`${settings.apiUrl}/player`, player);
  }
}
