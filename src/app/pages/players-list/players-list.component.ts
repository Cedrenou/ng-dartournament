import {Component, OnInit} from '@angular/core';
import {Player} from '../../models/player.model';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.scss']
})
export class PlayersListComponent implements OnInit {

  playerList: Player[];

  constructor(private playerService: PlayersService) {
  }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(players => {
      this.playerList = players;
      console.log(players);
    });
  }

  deletePlayer(id) {
    this.playerService.deletePlayer(id).subscribe();
  }
}
