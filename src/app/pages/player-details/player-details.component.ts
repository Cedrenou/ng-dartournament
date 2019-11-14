import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent implements OnInit {

  player;

  constructor(private playerService: PlayersService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayerById(id).subscribe(data => {
      this.player = data;
    });
  }

}
