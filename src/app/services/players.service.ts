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

  getTopPlayer() {
    return this.http.get(`${settings.apiUrl}/top-player`)
  }

  deletePlayer(id) {
    return this.http.delete(`${settings.apiUrl}/player/${id}`);
  }

  razPlayerPoint(playerId) {
    const body = {
      _id: playerId
    };
    return this.http.post(`${settings.apiUrl}/player/raz`, body);
  }

  createPlayer(player) {
    return this.http.post(`${settings.apiUrl}/player`, player);
  }

  playerFirstPlace(id, points, nbFirstPlace, nbGamesPlayed) {
    const body = {
      _id: id,
      points: points,
      nbFirstPlace: nbFirstPlace,
      nbGamesPlayed: nbGamesPlayed
    };

    return this.http.post(`${settings.apiUrl}/player/first-place`, body);
  }

  playerSecondPlace(id, points, nbSecondPlace, nbGamesPlayed) {
    const body = {
      _id: id,
      points: points,
      nbSecondPlace: nbSecondPlace,
      nbGamesPlayed: nbGamesPlayed
    };

    return this.http.post(`${settings.apiUrl}/player/second-place`, body);
  }

  playerThirdPlace(id, points, nbThirdPlace, nbGamesPlayed) {
    const body = {
      _id: id,
      points: points,
      nbThirdPlace: nbThirdPlace,
      nbGamesPlayed: nbGamesPlayed
    };

    return this.http.post(`${settings.apiUrl}/player/third-place`, body);
  }

  playerNoPoints(id, nbGamesPlayed) {
    const body = {
      _id: id,
      nbGamesPlayed: nbGamesPlayed
    }

    return this.http.post(`${settings.apiUrl}/player/no-points`, body)
  }
}
