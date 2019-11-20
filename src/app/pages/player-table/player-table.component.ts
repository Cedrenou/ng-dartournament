import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {

  displayedColumns: string[] = ['name', 'points', 'actions'];
  dataSource;

  constructor(private playerService: PlayersService) {
  }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(data => {
      console.log(data);
      this.dataSource = data;
    });
  }

  playerFirstPlace(id, points) {
    this.playerService.playerFirstPlace(id, points)
      .subscribe(() => this.refresh())
  }

  playerSecondPlace(id, points) {
    this.playerService.playerSecondPlace(id, points)
      .subscribe(() => this.refresh())
  }

  playerThirdPlace(id, points) {
    this.playerService.playerThirdPlace(id, points)
      .subscribe(() => this.refresh())
  }

  refresh() {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.dataSource = data;
    });
  }
}
