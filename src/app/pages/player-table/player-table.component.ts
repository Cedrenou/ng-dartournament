import {Component, OnInit, ViewChild} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {MatSort, MatTableDataSource} from '@angular/material';
import {faFire} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-player-table',
  templateUrl: './player-table.component.html',
  styleUrls: ['./player-table.component.scss']
})
export class PlayerTableComponent implements OnInit {

  faFire = faFire;
  topPlayerId

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['name', 'points', 'nbGamedPlayed', 'nbFirstPlace', 'nbSecondPlace', 'nbThirdPlace', 'actions'];
  dataSource;

  constructor(private playerService: PlayersService) {
  }

  ngOnInit() {
    this.playerService.getAllPlayers().subscribe(data => {
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    });
    this.getTopPlayer()
  }

  getTopPlayer() {
    this.playerService.getTopPlayer().subscribe(topPlayer => {
      this.topPlayerId = topPlayer[0]._id;
      console.log(topPlayer[0]._id)
    })
  }

  playerFirstPlace(id, points, nbFirstPlace, nbGamesPlayed) {
    this.playerService.playerFirstPlace(id, points, nbFirstPlace,nbGamesPlayed)
      .subscribe(() => this.refresh());
  }

  playerSecondPlace(id, points, nbSecondPlace, nbGamesPlayed) {
    this.playerService.playerSecondPlace(id, points, nbSecondPlace, nbGamesPlayed)
      .subscribe(() => this.refresh());
  }

  playerThirdPlace(id, points, nbThirdPlace, nbGamesPlayed) {
    this.playerService.playerThirdPlace(id, points, nbThirdPlace, nbGamesPlayed)
      .subscribe(() => this.refresh());
  }

  refresh() {
    this.playerService.getAllPlayers().subscribe((data) => {
      this.dataSource = new MatTableDataSource(data);
    });
    this.getTopPlayer()
  }
}
