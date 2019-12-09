import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private playersService: PlayersService) {
  }

  allPlayers: Player[];

  ngOnInit() {
    this.playersService.getAllPlayers().subscribe(players => {
      console.log(players);
      this.allPlayers = players;
    });
  }

  calculateRatio() {
    let ratio;
    this.allPlayers.map(player => {
      ratio = player.points / player.nbGamesPlayed * 100 / 9;
      console.log(ratio);
    });
  }

}
