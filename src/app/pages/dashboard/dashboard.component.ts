import {Component, OnInit} from '@angular/core';
import {PlayersService} from '../../services/players.service';
import {Player} from '../../models/player.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  allPlayers: Player[];
  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  barChartColor = [{
    // backgroundColor: string | string[],
    // borderWidth: number | number[],
    // borderColor: string | string[],
    // borderCapStyle: string,
    // borderDash: number[],
    // borderDashOffset: number,
    // borderJoinStyle: string,
    // pointBorderColor: string | string[],
    // pointBackgroundColor: string | string[],
    // pointBorderWidth: number | number[],
    // pointRadius: number | number[],
    // pointHoverRadius: number | number[],
    // pointHitRadius: number | number[],
    // pointHoverBackgroundColor: string | string[],
    // pointHoverBorderColor: string | string[],
    // pointHoverBorderWidth: number | number[],
    // pointStyle: string | string[],
    // hoverBackgroundColor: string | string[],
    // hoverBorderColor: string | string[],
    // hoverBorderWidth: number
  }];
  barChartLabels = [];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {
      data: [],
      label: 'Ratio Points / Partie Joué '
    }
  ];

  constructor(private playersService: PlayersService) {
  }

  ngOnInit() {
    this.playersService.getAllPlayers().subscribe(players => {
        console.log(players);
        this.allPlayers = players;
      }, () => console.error('erreur !')
      , () => this.generateChartData());
  }

  generateChartData() {
    let ratio;
    this.allPlayers.map(player => {
      ratio = player.points / player.nbGamesPlayed * 100 / 9;
      this.barChartData[0].data.push(Math.round(ratio * 100) / 100);
      this.barChartLabels.push(`${player.firstName} ${player.lastName}`);
    });
  }
}
