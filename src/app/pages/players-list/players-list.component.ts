import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../models/player.model';

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
    this.playerService.getAllPlayers().subscribe(data => {
      console.log(data);
      this.refresh(data);
    });
  }

  deletePlayer(id) {
    this.playerService.deletePlayer(id).subscribe(data => {
      this.refresh(data);
    });
  }

  refresh(data) {
    this.playerService.getAllPlayers().subscribe((players) => {
      this.playerList = players;
    });
  }
}
